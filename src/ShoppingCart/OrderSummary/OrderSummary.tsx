interface OrderSummaryProps {
  total: number;
}

function OrderSummary({ total }: OrderSummaryProps) {
  return (
      <div className="OrderSummaryContainer">
          <h2>Resumen del pedido</h2>
          <p>Subtotal: ${total}</p>
          <button>Proceder al pago</button>
      </div>
  );
}

export default OrderSummary;