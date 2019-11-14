import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/logo.svg';

import { Container, Cart } from './styles';

function Header({ cartLength }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <small>{cartLength} items</small>
        </div>
        <MdShoppingBasket size={34} color="#fff" />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartLength: state.cart.length,
});

export default connect(mapStateToProps)(Header);
