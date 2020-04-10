import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 80%;
  min-width: 600px;
  bottom: 0;
  margin: 0 auto;
  background: #fff;
  height: 45px;
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);

  justify-content: space-between;
  align-items: center;
  align-content: center;

  button {
    height: 100%;
    margin-left: 5px;
    margin-right: 5px;
  }

  span {
    font-size: 20px;
  }
`;
