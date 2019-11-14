import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;

  img {
    max-width: 260px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    color: #fff;
    margin-right: 10px;

    strong {
      font-size: 16px;
    }

    small {
      opacity: 0.8;
    }
  }
`;
