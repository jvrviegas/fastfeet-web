import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  background: #fff;
  padding: 30px;

  div.first-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 10px;
  }

  div.second-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
  }

  div.third-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 100%;
  }

  input {
    width: 100%;
    height: 40px;
  }
`;
