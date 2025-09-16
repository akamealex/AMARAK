export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
      <ul className="space-y-4 text-lg">
        <li>¿Dónde puedo comprar? → Directamente en WhatsApp.</li>
        <li>¿Cómo pago? → Estamos habilitando Stripe, por ahora vía WhatsApp.</li>
        <li>¿Qué tallas manejan? → Desde S hasta Plus, según referencia.</li>
      </ul>
    </div>
  );
}