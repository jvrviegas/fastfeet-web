import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  min-width: 600px;

  display: flex;
  flex-direction: column;

  h2 {
    color: #444;
    font-size: 24px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 34px;
    padding: 5px 0;

    button {
      display: flex;
      padding: 0 20px;
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      color: #fff;
      font-weight: bold;

      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }

  table {
    width: 100%;
    border-spacing: 0 21px;

    thead th {
      color: #444;
      text-align: left;
      padding: 0 12px;
    }

    tbody td {
      border-color: transparent;
      background: #fff;
      color: #666;
      padding: 6px 12px;
      border-radius: 4px;
      height: 57px;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
  }
`;
