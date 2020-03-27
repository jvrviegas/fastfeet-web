/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet" />

        <Form>
          <label htmlFor="email">Seu e-mail</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="exemplo@email.com"
          />

          <label htmlFor="email">Sua senha</label>
          <Input name="password" type="password" placeholder="************" />

          <button type="submit">Entrar no sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
