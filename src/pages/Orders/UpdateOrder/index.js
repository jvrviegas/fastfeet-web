/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import FormHeader from '~/components/FormHeader';
import { Container } from './styles';

export default function UpdateOrder() {
  return (
    <>
      <FormHeader title="Edição de encomendas" />

      <Container>
        <Form>
          <div className="first-grid">
            <div className="input-left">
              <label htmlFor="email">Destinatário</label>
              <Input name="recipient" placeholder="Ludwig van Beethoven" />
            </div>

            <div className="input-right">
              <label htmlFor="email">Entregador</label>
              <Input name="deliveryman" placeholder="John Doe" />
            </div>
          </div>

          <div className="second-grid">
            <label htmlFor="email">Nome do produto</label>
            <Input name="product" placeholder="Yamaha SX7" />
          </div>
        </Form>
      </Container>
    </>
  );
}
