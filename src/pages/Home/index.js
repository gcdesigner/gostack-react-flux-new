import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/models/cart/actions';

import { ProductList, Product, AddCartButton } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  };

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <Product key={product.id}>
            <img src={product.image} alt={product.title} />
            <span>{product.title}</span>
            <strong>{product.priceFormatted}</strong>

            <AddCartButton onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={18} color="#fff" />
                <small>3</small>
              </div>
              <strong>ADICIONAR AO CARRINHO</strong>
            </AddCartButton>
          </Product>
        ))}
      </ProductList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
