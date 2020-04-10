import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  min-width: 600px;
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  background: #fff;
  height: 45px;

  justify-content: space-between;
  align-items: center;
  align-content: center;

  button {
    background: #ccc;
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
  }

  span {
    font-size: 20px;
  }
`;
