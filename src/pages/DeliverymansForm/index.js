/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import AvatarInput from './AvatarInput';
import LoadingSpinner from '~/components/LoadingSpinner';

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
  const [loading, setLoading] = useState(false);

  const deliveryman = location.state && location.state;

  async function handleSubmit({ name, email, avatar_id }) {
    try {
      setLoading(true);
      if (deliveryman) {
        await api.put(`/deliverymans/${deliveryman.id}`, {
          name,
          email,
          avatar_id,
        });

        setLoading(false);
        toast.success('Entregador atualizado com sucesso');
      } else {
        await api.post('/deliverymans', {
          name,
          email,
          avatar_id,
        });

        setLoading(false);
        toast.success('Entregador criado com sucesso');
      }

      history.push('/deliverymans');
    } catch (err) {
      toast.error('Falha ao processar, por favor verifique os dados');
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Form schema={schema} initialData={deliveryman} onSubmit={handleSubmit}>
          <FormHeader
            title={`${deliveryman ? 'Edição ' : 'Cadastro '}de entregadores`}
            page="deliverymans"
          />

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
      )}
    </Container>
  );
}

DeliverymansForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
