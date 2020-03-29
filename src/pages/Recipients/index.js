import React from 'react';

import ContentHeader from '~/components/ContentHeader';
import ActionsButton from '~/components/ActionsButton';

const actions = ['Editar', 'Excluir'];

export default function Recipients() {
  return (
    <>
      <h2>Gerenciando destinatários</h2>
      <ContentHeader title="destinatários" />

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
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
