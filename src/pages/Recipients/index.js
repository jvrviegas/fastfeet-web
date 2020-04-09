/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { MdSearch, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import ActionsButton from '~/components/ActionsButton';

const actions = ['Editar', 'Excluir'];

export default function Recipients({ history }) {
  const [recipients, setRecipients] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const loadRecipients = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/recipients`, {
      params: {
        filter,
      },
    });

    setRecipients(response.data);
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    loadRecipients();
  }, [loadRecipients]);

  async function handleDelete(id) {
    await api.delete(`/recipients/${id}`);
    toast.success('Destinatário excluído com sucesso!');
    loadRecipients();
  }

  return (
    <>
      <h2>Gerenciando destinatários</h2>
      <div>
        <div className="search-field">
          <MdSearch size={20} color="#999" />
          <input
            type="text"
            name="filter"
            placeholder="Buscar por destinatário"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => history.push('/recipients/create')}
        >
          <MdAdd size={24} />
          Cadastrar
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <FaSpinner size={30} />
        </div>
      ) : recipients.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th style={{ textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map((recipient) => (
              <tr key={recipient.id}>
                <td>
                  #{recipient.id < 10 ? `0${recipient.id}` : recipient.id}
                </td>
                <td>{recipient.name}</td>
                <td>
                  {`${recipient.street_name}, ${recipient.number}, ${recipient.town} - ${recipient.state}`}
                </td>
                <td style={{ textAlign: 'center' }}>
                  <ActionsButton
                    actions={actions}
                    page="recipients"
                    data={recipient}
                    callback={() => handleDelete(recipient.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-list">
          <span>Nenhum resultado encontrado.</span>
        </div>
      )}
    </>
  );
}

Recipients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
