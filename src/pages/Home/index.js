import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/models/cart/actions';

import { ProductList, Product, AddCartButton } from './styles';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getData();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.id}>
          <img src={product.image} alt={product.title} />
          <span>{product.title}</span>
          <strong>{product.priceFormatted}</strong>

          <AddCartButton onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={18} color="#fff" />
              <small>{amount[product.id] || 0}</small>
            </div>
            <strong>ADICIONAR AO CARRINHO</strong>
          </AddCartButton>
        </Product>
      ))}
    </ProductList>
  );
}
