/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import ActionsButton from '~/components/ActionsButton';
import Pagination from '~/components/Pagination';
import LoadingSpinner from '~/components/LoadingSpinner';

import { MiniProfile, Status, Badge } from './styles';

import api from '~/services/api';
import orderStatus from '~/utils/orderStatus';

const actions = ['Visualizar', 'Editar', 'Excluir'];

export default function Orders({ history }) {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(false);

  const loadOrders = useCallback(async () => {
    setLoading(true);

    const response = await api.get(`/orders`, {
      params: {
        filter,
        page,
      },
    });

    setLimit(response.data.length < 20);

    const data = response.data.map((order) => ({
      ...order,
      status: orderStatus(order),
    }));

    setOrders(data);
    setLoading(false);
  }, [filter, page]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  async function handleDelete(id) {
    await api.delete(`/orders/${id}`);
    toast.success('Encomenda excluída com sucesso!');
    loadOrders();
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
      <h2>Gerenciando encomendas</h2>

      <div>
        <div className="search-field">
          <MdSearch size={20} color="#999" />
          <input
            type="text"
            name="filter"
            placeholder="Buscar por encomendas"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <button type="button" onClick={() => history.push('/orders/create')}>
          <MdAdd size={24} />
          Cadastrar
        </button>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : orders.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id < 10 ? `0${order.id}` : order.id}</td>
                <td>{order.recipient.name}</td>
                <td>
                  <MiniProfile>
                    <img
                      src={
                        order.deliveryman.avatar
                          ? order.deliveryman.avatar.url
                          : `https://ui-avatars.com/api/?name=${order.deliveryman.name}&background=F4EFFC&color=A28FD0`
                      }
                      alt=""
                    />{' '}
                    {order.deliveryman.name}
                  </MiniProfile>
                </td>
                <td>{order.recipient.town}</td>
                <td>{order.recipient.state}</td>
                <td>
                  <Status status={order.status.id}>
                    <Badge status={order.status.id} />
                    <span>{order.status.name}</span>
                  </Status>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <ActionsButton
                    actions={actions}
                    page="orders"
                    data={order}
                    callback={() => handleDelete(order.id)}
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

Orders.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
