import React from 'react';

import ActionsButton from '~/components/ActionsButton';
import ContentHeader from '~/components/ContentHeader';

import { MiniProfile, Status, Badge } from './styles';

const actions = ['Visualizar', 'Editar', 'Excluir'];

export default function ListOrders() {
  return (
    <>
      <h2>Gerenciando encomendas</h2>
      <ContentHeader title="encomendas" />

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
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <MiniProfile>
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                  alt=""
                />{' '}
                John Doe
              </MiniProfile>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={1}>
                <Badge status={1} />
                <span>ENTREGUE</span>
              </Status>
            </td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <MiniProfile>
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                  alt=""
                />{' '}
                John Doe
              </MiniProfile>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={2}>
                <Badge status={2} />
                <span>PENDENTE</span>
              </Status>
            </td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <MiniProfile>
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                  alt=""
                />{' '}
                John Doe
              </MiniProfile>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={3}>
                <Badge status={3} />
                <span>RETIRADA</span>
              </Status>
            </td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <MiniProfile>
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0"
                  alt=""
                />{' '}
                John Doe
              </MiniProfile>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status status={4}>
                <Badge status={4} />
                <span>CANCELADA</span>
              </Status>
            </td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
