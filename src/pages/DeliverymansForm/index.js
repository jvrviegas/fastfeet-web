/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
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
  async function handleSubmit({ name, email, avatar_id }) {
    try {
      await api.post('/deliverymans', {
        name,
        email,
        avatar_id,
      });

      toast.success('Entregador criado com sucesso');

      history.push('/deliverymans');
    } catch (err) {
      toast.error('Erro ao criar entregador, verifique os dados');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
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
