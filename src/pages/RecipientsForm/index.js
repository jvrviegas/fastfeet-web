/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';

import FormHeader from '~/components/FormHeader';
import InputMask from './InputMask';
import LoadingSpinner from '~/components/LoadingSpinner';

import { Container, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  street_name: Yup.string().required('A rua é obrigatória'),
  number: Yup.string().required('O número é obrigatório'),
  complement: Yup.string(),
  town: Yup.string().required('A cidade é obrigatória'),
  state: Yup.string().required('O estado é obrigatório'),
  postal_code: Yup.string().required('O CEP é obrigatório'),
});

export default function RecipientsForm({ history }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const recipient = location.state && location.state;

  async function handleSubmit(data) {
    try {
      setLoading(true);
      if (recipient) {
        await api.put(`/recipients/${recipient.id}`, data);

        setLoading(false);
        toast.success('Entregador atualizado com sucesso');
      } else {
        await api.post('/recipients', data);

        setLoading(false);
        toast.success('Entregador criado com sucesso');
      }

      history.push('/recipients');
    } catch (err) {
      toast.error('Falha ao processar, por favor verifique seus dados');
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Form schema={schema} initialData={recipient} onSubmit={handleSubmit}>
          <FormHeader
            title={`${recipient ? 'Edição ' : 'Cadastro '}de destinatários`}
            page="recipients"
          />

          <Content>
            <div className="first-grid">
              <label>Nome</label>
              <Input name="name" placeholder="Ludwig van Beethoven" />
            </div>

            <div className="second-grid">
              <div className="input-left">
                <label>Rua</label>
                <Input name="street_name" placeholder="Rua Beethoven" />
              </div>

              <div className="input-right">
                <label>Número</label>
                <Input name="number" placeholder="1729" />
              </div>

              <div className="input-right">
                <label>Complemento</label>
                <Input name="complement" placeholder="" />
              </div>
            </div>

            <div className="third-grid">
              <div className="input-left">
                <label>Cidade</label>
                <Input name="town" placeholder="Diadema" />
              </div>

              <div className="input-middle">
                <label>Estado</label>
                <Input name="state" placeholder="São Paulo" />
              </div>

              <div className="input-right">
                <label>CEP</label>
                <InputMask
                  name="postal_code"
                  mask="99999-999"
                  placeholder="09960-580"
                />
              </div>
            </div>
          </Content>
        </Form>
      )}
    </Container>
  );
}

RecipientsForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
