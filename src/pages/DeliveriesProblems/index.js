/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import api from '~/services/api';

import ActionsButton from '~/components/ActionsButton';

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
        <div className="loading">
          <FaSpinner size={30} />
        </div>
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
                  {deliveryProblem.id < 10
                    ? `0${deliveryProblem.id}`
                    : deliveryProblem.id}
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
