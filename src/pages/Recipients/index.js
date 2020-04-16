/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import ActionsButton from '~/components/ActionsButton';
import Pagination from '~/components/Pagination';
import LoadingSpinner from '~/components/LoadingSpinner';

const actions = ['Editar', 'Excluir'];

export default function Recipients({ history }) {
  const [recipients, setRecipients] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(false);

  const loadRecipients = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/recipients`, {
      params: {
        filter,
      },
    });

    setLimit(response.data.length < 20);

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

  function previousPage() {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
    }
  }

  function nextPage() {
    if (!limit) {
      const newPage = page + 1;
      setPage(newPage);
    }
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
        <LoadingSpinner />
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

      <Pagination
        page={page}
        limit={limit}
        previous={previousPage}
        next={nextPage}
      />
    </>
  );
}

Recipients.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
