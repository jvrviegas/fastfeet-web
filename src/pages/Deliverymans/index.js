/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { MdSearch, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import ActionsButton from '~/components/ActionsButton';
import Pagination from '~/components/Pagination';

import api from '~/services/api';

const actions = ['Editar', 'Excluir'];

export default function Deliverymans({ history }) {
  const [deliverymans, setDeliverymans] = useState([]);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadDeliverymans = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/deliverymans`, {
      params: {
        filter,
        page,
      },
    });

    setDeliverymans(response.data);
    setLoading(false);
  }, [filter, page]);

  useEffect(() => {
    loadDeliverymans();
  }, [loadDeliverymans]);

  async function handleDelete(id) {
    await api.delete(`/deliverymans/${id}`);
    toast.success('Entregador excluído com sucesso!');
    loadDeliverymans();
  }

  function previousPage() {
    if (page > 0) {
      const newPage = page - 1;
      setPage(newPage);
    }
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
  }

  return (
    <>
      <h2>Gerenciando entregadores</h2>
      <div>
        <div className="search-field">
          <MdSearch size={20} color="#999" />
          <input
            type="text"
            name="filter"
            placeholder="Buscar por entregador"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => history.push('/deliverymans/create')}
        >
          <MdAdd size={24} />
          Cadastrar
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <FaSpinner size={30} />
        </div>
      ) : deliverymans.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th style={{ textAlign: 'center' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {deliverymans.map((deliveryman) => (
                <tr key={deliveryman.id}>
                  <td>
                    #
                    {deliveryman.id < 10
                      ? `0${deliveryman.id}`
                      : deliveryman.id}
                  </td>
                  <td>
                    <img
                      src={
                        deliveryman.avatar
                          ? deliveryman.avatar.url
                          : `https://ui-avatars.com/api/?name=${deliveryman.name}&background=F4EFFC&color=A28FD0`
                      }
                      alt=""
                    />
                  </td>
                  <td>{deliveryman.name}</td>
                  <td>{deliveryman.email}</td>
                  <td style={{ textAlign: 'center' }}>
                    <ActionsButton
                      actions={actions}
                      page="deliverymans"
                      data={deliveryman}
                      callback={() => handleDelete(deliveryman.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="empty-list">
          <span>Nenhum resultado encontrado.</span>
        </div>
      )}
      <Pagination page={page} previous={previousPage} next={nextPage} />
    </>
  );
}

Deliverymans.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
