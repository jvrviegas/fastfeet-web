/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import AvatarInput from './AvatarInput';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  avatar_id: Yup.number(),
});

export default function DeliverymansForm({ history }) {
  const location = useLocation();

  const deliveryman = location.state && location.state;
  console.tron.log(deliveryman);

  async function handleSubmit({ name, email, avatar_id }) {
    try {
      if (deliveryman) {
        await api.put(`/deliverymans/${deliveryman.id}`, {
          name,
          email,
          avatar_id,
        });

        toast.success('Entregador atualizado com sucesso');
      } else {
        await api.post('/deliverymans', {
          name,
          email,
          avatar_id,
        });

        toast.success('Entregador criado com sucesso');
      }

      history.push('/deliverymans');
    } catch (err) {
      toast.error('Falha ao processar, por favor verifique os dados');
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={deliveryman} onSubmit={handleSubmit}>
        <FormHeader title="Cadastro de entregadores" page="deliverymans" />

        <Content>
          <div>
            <AvatarInput name="avatar_id" />
          </div>

          <label>Nome</label>
          <Input name="name" placeholder="John Doe" />

          <label>Email</label>
          <Input
            name="email"
            type="email"
            placeholder="example@rocketseat.com"
          />
        </Content>
      </Form>
    </Container>
  );
}

DeliverymansForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
