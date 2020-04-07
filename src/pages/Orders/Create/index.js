/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from './AsyncSelect';

import FormHeader from '~/components/FormHeader';
import { Container } from './styles';

import api from '~/services/api';

const schema = Yup.object().shape({
  recipient: Yup.object().required('O destinatário é obrigatório'),
  deliveryman: Yup.object({
    value: Yup.number(),
    label: Yup.string(),
  }).required('O entregador é obrigatório'),
  product: Yup.string().required('O produto é obrigatório'),
});

export default function CreateOrder() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get(`/recipients`, {
        params: {
          name: '',
        },
      });

      const data = response.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      setRecipients(data);
    }

    async function loadDeliverymans() {
      const response = await api.get(`/deliverymans`, {
        params: {
          name: '',
        },
      });

      const data = response.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));

      setDeliverymans(data);
    }

    loadRecipients();
    loadDeliverymans();
  }, []);

  const filterRecipients = (inputValue) => {
    return recipients.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const filterDeliverymans = (inputValue) => {
    return deliverymans.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const recipientOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(filterRecipients(inputValue));
    });

  const deliverymanOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(filterDeliverymans(inputValue));
    });

  function handleSubmit({ recipient, deliveryman, product }) {
    console.tron.log({ recipient, deliveryman, product });
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <FormHeader title="Cadastro de encomendas" />

          <div className="first-grid">
            <div className="input-left">
              <label htmlFor="recipient">Destinatário</label>
              <AsyncSelect
                name="recipient"
                cacheOptions
                loadOptions={recipientOptions}
                defaultOptions={recipients}
                placeholder="Selecione..."
              />
            </div>

            <div className="input-right">
              <label htmlFor="deliveryman">Entregador</label>
              <AsyncSelect
                name="deliveryman"
                cacheOptions
                loadOptions={deliverymanOptions}
                defaultOptions={deliverymans}
                placeholder="Selecione..."
              />
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
