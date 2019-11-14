import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const CartTable = styled.table`
  width: 100%;
  text-align: left;
  margin-bottom: 20px;

  thead tr {
    th {
      padding: 5px;
      color: #999;
    }
  }

  tbody tr {
    td {
      padding: 5px;
      border-bottom: 1px solid #eee;
    }

    img {
      width: 100px;
    }

    span {
      width: 100%;
      display: block;
      margin-bottom: 5px;
    }

    strong {
      font-size: 18px;
      color: #000;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button {
      display: flex;
      align-items: center;
      background: none;
      margin: 5px;
    }

    input {
      width: 50px;
      height: 30px;
      border: 1px solid #eee;
      border-radius: 4px;
      text-align: center;
    }
  }
`;

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    color: #fff;
    font-weight: bold;
    background: ${colors.primary};
    padding: 10px 15px;
  }

  div {
    flex: 1;
    display: flex;
    align-items: baseline;
    justify-content: flex-end;

    span {
      font-size: 18px;
      color: #999;
      margin-right: 5px;
    }

    strong {
      font-size: 28px;
      color: #000;
    }
  }
`;
