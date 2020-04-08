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
    grid-template-columns: repeat(2, minmax(200px, 600px));
    grid-gap: 30px;
    width: 100%;

    > div > input {
      width: 100%;
    }

    > input {
      height: 20px;
    }
  }

  div.second-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 10px;

    > input {
      height: 40px;
    }
  }
`;
