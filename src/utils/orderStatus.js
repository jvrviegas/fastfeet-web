export default function orderStatus(order) {
  if (!order.cancelled_at && order.start_date && order.end_date) {
    return {
      id: 1,
      name: 'ENTREGUE',
    };
  }

  if (!order.cancelled_at && !order.start_date && !order.end_date) {
    return {
      id: 2,
      name: 'PENDENTE',
    };
  }

  if (!order.cancelled_at && order.start_date && !order.end_date) {
    return {
      id: 3,
      name: 'RETIRADA',
    };
  }

  if (order.cancelled_at) {
    return {
      id: 4,
      name: 'CANCELADA',
    };
  }

  return {};
}
