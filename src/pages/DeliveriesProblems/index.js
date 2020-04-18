/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

import ActionsButton from '~/components/ActionsButton';
import LoadingSpinner from '~/components/LoadingSpinner';

const actions = ['Visualizar', 'Cancelar encomenda'];

export default function DeliveriesProblems() {
  const [deliveriesProblems, setDeliveriesProblems] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDeliveriesProblems = async () => {
    setLoading(true);

    const response = await api.get(`/deliveries/problems`);

    setDeliveriesProblems(response.data);
    setLoading(false);
  };

  useEffect(() => {
    loadDeliveriesProblems();
  }, []);

  async function handleCancelDelivery(id) {
    await api.put(`/problem/${id}/cancel-delivery`);
    toast.success('Encomenda cancelada com sucesso!');
    loadDeliveriesProblems();
  }

  return (
    <>
      <h2>Problemas na entrega</h2>

      {loading ? (
        <LoadingSpinner />
      ) : deliveriesProblems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th style={{ textAlign: 'center' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {deliveriesProblems.map((deliveryProblem) => (
              <tr>
                <td>
                  #
                  {deliveryProblem.delivery_id < 10
                    ? `0${deliveryProblem.delivery_id}`
                    : deliveryProblem.delivery_id}
                </td>
                <td>{deliveryProblem.description}</td>
                <td style={{ textAlign: 'center' }}>
                  <ActionsButton
                    actions={actions}
                    larger
                    page="deliveries-problems"
                    data={deliveryProblem}
                    callback={() => handleCancelDelivery(deliveryProblem.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-list">
          <span>Você não possui encomendas com problemas</span>
        </div>
      )}
    </>
  );
}
