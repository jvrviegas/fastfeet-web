import React from 'react';

import ActionsButton from '~/components/ActionsButton';
import ContentHeader from '~/components/ContentHeader';

const actions = ['Editar', 'Excluir'];

export default function Deliverymans() {
  return (
    <>
      <h2>Gerenciando entregadores</h2>
      <ContentHeader title="entregadores" />

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
          <tr>
            <td>#01</td>
            <td>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                alt=""
              />
            </td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                alt=""
              />
            </td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                alt=""
              />
            </td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                alt=""
              />
            </td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
