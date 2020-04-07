import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import ActionsButton from '~/components/ActionsButton';
import ContentHeader from '~/components/ContentHeader';

import api from '~/services/api';

const actions = ['Editar', 'Excluir'];

export default function Deliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadDeliverymans() {
      setLoading(true);
      const response = await api.get(`/deliverymans`, {
        params: {
          name: '',
        },
      });

      setDeliverymans(response.data);
      setLoading(false);
    }

    loadDeliverymans();
  }, []);

  function renderTableData() {
    return deliverymans.map((deliveryman) => {
      return (
        <tr>
          <td>#0{deliveryman.id}</td>
          <td>
            <img
              src={
                deliveryman.avatar
                  ? deliveryman.avatar.url
                  : 'https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0'
              }
              alt=""
            />
          </td>
          <td>{deliveryman.name}</td>
          <td>{deliveryman.email}</td>
          <td style={{ textAlign: 'center' }}>
            <ActionsButton actions={actions} />
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <h2>Gerenciando entregadores</h2>
      <ContentHeader title="entregadores" page="deliverymans" />

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
        <tbody>{renderTableData()}</tbody>
      </table>
    </>
  );
}
