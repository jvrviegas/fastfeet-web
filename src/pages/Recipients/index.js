import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '~/services/api';

import ContentHeader from '~/components/ContentHeader';
import ActionsButton from '~/components/ActionsButton';

const actions = ['Editar', 'Excluir'];

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecipients() {
      setLoading(true);

      const response = await api.get(`/recipients`, {
        params: {
          name: '',
        },
      });

      setRecipients(response.data);
      setLoading(false);
    }

    loadRecipients();
  }, []);

  function renderTableData() {
    if (recipients.length > 0) {
      return recipients.map((recipient) => {
        return (
          <tr key={recipient.id}>
            <td>#{recipient.id}</td>
            <td>{recipient.name}</td>
            <td>
              {`${recipient.street_name}, ${recipient.number}, ${recipient.town} - ${recipient.state}`}
            </td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
        );
      });
    }

    return (
      <div>
        <span>Você não possui nenhum destinatário cadastrado</span>
      </div>
    );
  }
  return (
    <>
      <h2>Gerenciando destinatários</h2>
      <ContentHeader title="destinatários" page="recipients" />

      {loading ? (
        <div className="loading">
          <FaSpinner size={30} />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th style={{ textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      )}
    </>
  );
}
