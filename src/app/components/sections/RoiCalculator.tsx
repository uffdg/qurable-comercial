import { useEffect, useMemo, useState } from 'react';

type Props = {
  accent: string;
  accentDark?: string;
  accentBg?: string;
  industry?: string;
  defaultClients?: number;
  defaultTicket?: number;
  defaultRetention?: number;
  ticketLabel?: string;
};

const fmt = (n: number) => Math.round(n).toLocaleString('es-AR');
const fmtUSD = (n: number) => 'USD ' + Math.round(n).toLocaleString('es-AR');

export default function RoiCalculator({
  accent,
  accentDark = accent,
  accentBg = 'rgba(0,0,0,0.04)',
  industry,
  defaultClients = 5000,
  defaultTicket = 50,
  defaultRetention = 40,
  ticketLabel = 'Ticket promedio mensual (USD)',
}: Props) {
  const [clients, setClients] = useState(defaultClients);
  const [ticket, setTicket] = useState(defaultTicket);
  const [retention, setRetention] = useState(defaultRetention);

  const [results, setResults] = useState({
    revCurrent: 0,
    revQurable: 0,
    revDelta: 0,
    payback: 0,
    retNew: 0,
  });

  useEffect(() => {
    const ret = retention / 100;
    const retQurable = Math.min(ret * 1.27, 0.92);
    const revCurrent = clients * ticket * 12 * ret;
    const revQurable = clients * ticket * 12 * retQurable;
    const delta = revQurable - revCurrent;
    const monthlyCost = 550;
    const paybackMonths = delta > 0 ? Math.ceil((monthlyCost * 12) / (delta / 12)) : 0;

    setResults({
      revCurrent,
      revQurable,
      revDelta: delta,
      payback: paybackMonths,
      retNew: retQurable * 100,
    });
  }, [clients, ticket, retention]);

  const sliderStyle = useMemo(
    () =>
      ({
        accentColor: accent,
      }) as React.CSSProperties,
    [accent]
  );

  return (
    <section className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
            Calculadora de ROI
          </p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">
            {industry ? `Tu ${industry}, tus números` : 'Tu negocio, tus números'}
          </h2>
          <p className="text-[#63626F] mt-2 max-w-2xl mx-auto">
            Ajustá los datos de tu operación actual y mirá el impacto potencial de un programa de
            fidelización con Qurable.
          </p>
        </div>

        <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="text-sm text-[#63626F] block mb-2">Clientes activos</label>
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={clients}
                onChange={(e) => setClients(parseInt(e.target.value))}
                className="w-full"
                style={sliderStyle}
              />
              <div className="text-sm font-medium text-[#2F2E35] mt-1">{fmt(clients)}</div>
            </div>
            <div>
              <label className="text-sm text-[#63626F] block mb-2">{ticketLabel}</label>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={ticket}
                onChange={(e) => setTicket(parseInt(e.target.value))}
                className="w-full"
                style={sliderStyle}
              />
              <div className="text-sm font-medium text-[#2F2E35] mt-1">USD {ticket}</div>
            </div>
            <div>
              <label className="text-sm text-[#63626F] block mb-2">Retención actual (%)</label>
              <input
                type="range"
                min="10"
                max="90"
                step="1"
                value={retention}
                onChange={(e) => setRetention(parseInt(e.target.value))}
                className="w-full"
                style={sliderStyle}
              />
              <div className="text-sm font-medium text-[#2F2E35] mt-1">{retention}%</div>
            </div>
          </div>

          <div className="border border-[#D7D6DB] rounded-lg p-6 bg-[#FAFAFA] space-y-3">
            <Row
              label="Revenue actual (12 meses)"
              value={fmtUSD(results.revCurrent)}
              valueColor="#2F2E35"
            />
            <Row
              label={`Revenue proyectado con Qurable (retención ${results.retNew.toFixed(0)}%)`}
              value={fmtUSD(results.revQurable)}
              valueColor={accent}
            />
            <Row
              label="Revenue incremental estimado"
              value={`+${fmtUSD(results.revDelta)}`}
              valueColor={accent}
            />
            <Row
              label="Tiempo estimado de recupero de inversión"
              value={`${results.payback} meses`}
              valueColor="#2F2E35"
              last
            />
          </div>

          <div
            className="mt-6 p-4 rounded-lg flex flex-wrap items-center justify-between gap-4 border"
            style={{
              backgroundColor: accentBg,
              borderColor: accent + '40',
            }}
          >
            <div className="text-sm flex-1" style={{ color: accentDark }}>
              Con <strong>{fmt(clients)} clientes</strong> y ticket de{' '}
              <strong>USD {ticket}</strong>, Qurable podría generar{' '}
              <strong>+{fmtUSD(results.revDelta)} adicionales</strong> en 12 meses.
            </div>
            <button
              className="px-6 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: accent }}
            >
              Agendá una demo ↗
            </button>
          </div>

          <p className="text-xs text-[#91909D] mt-4 text-center">
            Modelo conservador: uplift de retención del 27% (con techo en 92%) basado en benchmarks
            de programas con CDP + loyalty + mensajería omnicanal.
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  valueColor,
  last,
}: {
  label: string;
  value: string;
  valueColor: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex justify-between items-center ${last ? '' : 'pb-3 border-b border-[#D7D6DB]'}`}
    >
      <span className="text-sm text-[#63626F]">{label}</span>
      <span className="text-base font-medium" style={{ color: valueColor }}>
        {value}
      </span>
    </div>
  );
}
