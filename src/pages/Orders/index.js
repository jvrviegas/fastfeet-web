import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ActionsButton from '~/components/ActionsButton';
import ContentHeader from '~/components/ContentHeader';

import { MiniProfile, Status, Badge } from './styles';

import api from '~/services/api';
import orderStatus from '~/utils/orderStatus';

const actions = ['Visualizar', 'Editar', 'Excluir'];

export default function ListOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadOrders() {
      setLoading(true);

      const response = await api.get(`/orders`, {
        params: {
          name: '',
        },
      });

      const data = response.data.map((order) => ({
        ...order,
        status: orderStatus(order),
      }));

      setOrders(data);
      setLoading(false);
    }

    loadOrders();
  }, []);

  function renderTableData() {
    return orders.map((order) => {
      return (
        <tr>
          <td>#{order.id}</td>
          <td>{order.recipient.name}</td>
          <td>
            <MiniProfile>
              <img
                src={
                  order.deliveryman.avatar
                    ? order.deliveryman.avatar.url
                    : 'https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0'
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
            <ActionsButton actions={actions} />
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <h2>Gerenciando encomendas</h2>
      <ContentHeader title="encomendas" page="orders" />

      {loading ? (
        <div className="loading">
          <FaSpinner size={30} />
        </div>
      ) : (
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
          <tbody>{renderTableData()}</tbody>
        </table>
      )}
    </>
  );
}
