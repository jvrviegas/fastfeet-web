import React from 'react';

import ActionsButton from '~/components/ActionsButton';

const actions = ['Visualizar', 'Cancelar encomenda'];

export default function DeliveriesProblems() {
  return (
    <>
      <h2>Problemas na entrega</h2>

      <table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th style={{ textAlign: 'center' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
              mauris et felis eleifend elementum vel quis lectus…
            </td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} larger />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Endereço não encontrado</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} larger />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Destinatário ausente</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} larger />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Infelizmente sofri um acidente que danificou a encomenda</td>
            <td style={{ textAlign: 'center' }}>
              <ActionsButton actions={actions} larger />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
