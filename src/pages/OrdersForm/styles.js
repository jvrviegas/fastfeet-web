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

  label {
    text-align: left;
    display: block;
    font-weight: bold;
    margin: 5px 0 10px;
    font-size: 13px;
    color: #333;
  }

  input {
    display: block;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 10px;

    &::placeholder {
      color: #999;
    }
  }
`;
