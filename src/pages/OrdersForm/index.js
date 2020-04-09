/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from './AsyncSelect';

import FormHeader from '~/components/FormHeader';
import { Container, Content } from './styles';

import api from '~/services/api';

const schema = Yup.object().shape({
  recipient: Yup.object({
    value: Yup.number(),
    label: Yup.string(),
  }).required('O destinatário é obrigatório'),
  deliveryman: Yup.object({
    value: Yup.number(),
    label: Yup.string(),
  }).required('O entregador é obrigatório'),
  product: Yup.string().required('O produto é obrigatório'),
});

export default function OrdersForm({ history }) {
  const [deliverymans, setDeliverymans] = useState([]);
  const [recipients, setRecipients] = useState([]);

  const location = useLocation();
  const order = location.state && location.state;

  console.tron.log(order);

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

  const filterData = (inputValue, array) => {
    return array.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const recipientOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(filterData(inputValue, recipients));
    });

  const deliverymanOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(filterData(inputValue, deliverymans));
    });

  async function handleSubmit({ recipient, deliveryman, product }) {
    try {
      if (order) {
        await api.put(`/orders/${order.id}`, {
          recipient_id: recipient.value,
          deliveryman_id: deliveryman.value,
          product,
        });

        toast.success('Encomenda atualizada com sucesso');
      } else {
        await api.post('/orders', {
          recipient_id: recipient.value,
          deliveryman_id: deliveryman.value,
          product,
        });

        toast.success('Encomenda criada com sucesso');
      }

      history.push('/orders');
    } catch (err) {
      toast.error('Falha ao processar, por favor verifique os dados');
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={order} onSubmit={handleSubmit}>
        <FormHeader title="Cadastro de encomendas" />

        <Content>
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
        </Content>
      </Form>
    </Container>
  );
}

OrdersForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
