import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/logo.svg';

import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <small>{cartSize} items</small>
        </div>
        <MdShoppingBasket size={34} color="#fff" />
      </Cart>
    </Container>
  );
}
