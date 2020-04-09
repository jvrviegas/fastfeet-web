export default function orderStatus(order) {
  if (!order.canceled_at && order.start_date && order.end_date) {
    return {
      id: 1,
      name: 'ENTREGUE',
    };
  }

  if (!order.canceled_at && !order.start_date && !order.end_date) {
    return {
      id: 2,
      name: 'PENDENTE',
    };
  }

  if (!order.canceled_at && order.start_date && !order.end_date) {
    return {
      id: 3,
      name: 'RETIRADA',
    };
  }

  if (order.canceled_at) {
    return {
      id: 4,
      name: 'CANCELADA',
    };
  }

  return {};
}
