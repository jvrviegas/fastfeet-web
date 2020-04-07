/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { Form, Input } from '@rocketseat/unform';

import FormHeader from '~/components/FormHeader';
import { Container } from './styles';

import api from '~/services/api';

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

  return (
    <>
      <FormHeader title="Cadastro de encomendas" />

      <Container>
        <Form>
          <div className="first-grid">
            <div className="input-left">
              <label htmlFor="email">Destinatário</label>
              <AsyncSelect
                cacheOptions
                loadOptions={recipientOptions}
                defaultOptions
                placeholder="Selecione..."
              />
            </div>

            <div className="input-right">
              <label htmlFor="email">Entregador</label>
              <AsyncSelect
                cacheOptions
                loadOptions={deliverymanOptions}
                defaultOptions
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
