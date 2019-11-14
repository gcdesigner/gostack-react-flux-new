import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MdAddCircle,
  MdRemoveCircle,
  MdRemoveShoppingCart,
} from 'react-icons/md';
import * as CartActions from '../../store/models/cart/actions';
import { formatPrice } from '../../util/format';

import { colors } from '../../styles/global';

import { Container, CartTable, CartFooter } from './styles';

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <CartTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th align="center">QUANTIDADE</th>
            <th>PREÇO</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td align="center" width="150">
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <span>{product.title}</span>
                <strong>{product.priceFormatted}</strong>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircle size={20} color={colors.primary} />
                  </button>
                  <input type="text" value={product.amount} readOnly disabled />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircle size={20} color={colors.primary} />
                  </button>
                </div>
              </td>
              <td>{product.subTotal}</td>
              <td align="center">
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdRemoveShoppingCart size={20} color={colors.primary} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </CartTable>
      <CartFooter>
        <button type="button">FINALIZAR PEDIDO</button>
        <div>
          <span>TOTAL</span>
          <strong>R$ 150,00</strong>
        </div>
      </CartFooter>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
