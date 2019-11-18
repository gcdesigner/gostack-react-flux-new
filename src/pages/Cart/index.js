import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdAddCircle,
  MdRemoveCircle,
  MdRemoveShoppingCart,
} from 'react-icons/md';
import * as CartActions from '../../store/models/cart/actions';
import { formatPrice } from '../../util/format';

import { colors } from '../../styles/global';

import { Container, CartTable, CartFooter } from './styles';

export default function Cart() {
  const cartSize = useSelector(state => state.cart.length);

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
          {cartSize ? (
            cart.map(product => (
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
                    <input
                      type="text"
                      value={product.amount}
                      readOnly
                      disabled
                    />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircle size={20} color={colors.primary} />
                    </button>
                  </div>
                </td>
                <td>{product.subTotal}</td>
                <td align="center">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <MdRemoveShoppingCart size={20} color={colors.primary} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Nenhum produto adicionado ao carrinho!</td>
            </tr>
          )}
        </tbody>
      </CartTable>
      <CartFooter>
        <button type="button">FINALIZAR PEDIDO</button>
        <div>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </div>
      </CartFooter>
    </Container>
  );
}
