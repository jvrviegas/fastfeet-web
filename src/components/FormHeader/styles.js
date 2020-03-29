import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;

    button {
      height: 36px;
      margin-left: 15px;
      background: ${(props) => (props.return ? '#ccc' : '#7d40e7')};

      svg {
        margin-right: 5px;
      }
    }

    #return {
      background: #ccc;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.07, '#ccc')};
      }
    }
  }
`;
