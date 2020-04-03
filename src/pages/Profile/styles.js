import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  background: #fff;
  margin: 0 auto;

  h2 {
    align-self: center;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    align-items: stretch;
    padding: 30px;

    label {
      text-align: left;
      display: block;
      font-weight: bold;
      margin: 5px 0 5px;
      text-transform: uppercase;
      font-size: 13px;
      color: #333;
    }

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      height: 40px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 40px;
    }
  }
`;
