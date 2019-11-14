import styled from 'styled-components';

import { colors } from '../../styles/global';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  overflow: hidden;

  &:hover {
    img {
      transform: rotate(3deg) scale(1.05);
    }
  }

  img {
    align-self: center;
    width: 100%;
    max-width: 200px;
    margin-top: auto;
    margin-bottom: 10px;
    transition: all 0.5s;
  }

  > span {
    font-size: 16px;
    color: #333;
  }

  > strong {
    font-size: 21px;
    color: #000;
    margin: 5px 0;
  }
`;

export const AddCartButton = styled.button`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  transition: opacity 0.5s;
  margin-top: auto;

  &:hover {
    opacity: 0.8;
  }

  > div {
    display: flex;
    align-items: center;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px 8px;
    color: #fff;

    svg {
      margin-right: 3px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  strong {
    flex: 1;
    color: #fff;
    text-align: center;
  }
`;
