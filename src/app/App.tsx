import { useState, useEffect } from 'react';
import { Line, Radar, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function App() {
  const [clients, setClients] = useState(5000);
  const [ticket, setTicket] = useState(50);
  const [retention, setRetention] = useState(40);

  const [results, setResults] = useState({
    revCurrent: 0,
    revQurable: 0,
    revDelta: 0,
    payback: 0,
  });

  const fmt = (n: number) => Math.round(n).toLocaleString('es-AR');
  const fmtUSD = (n: number) => 'USD ' + Math.round(n).toLocaleString('es-AR');

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
    });
  }, [clients, ticket, retention]);

  const clvData = {
    labels: ['Mes 1', 'Mes 3', 'Mes 6', 'Mes 12', 'Mes 18', 'Mes 24'],
    datasets: [
      {
        label: 'Loyalty básico',
        data: [100, 108, 112, 120, 122, 125],
        borderColor: '#91909D',
        backgroundColor: 'rgba(145,144,157,.08)',
        borderWidth: 2,
        borderDash: [5, 4],
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      },
      {
        label: 'Qurable',
        data: [100, 140, 210, 320, 400, 480],
        borderColor: '#6430F7',
        backgroundColor: 'rgba(100,48,247,.08)',
        borderWidth: 2.5,
        tension: 0.4,
        fill: true,
        pointRadius: 3,
      },
      {
        label: 'Dexter +30%',
        data: [null, null, null, 130, null, null],
        borderColor: '#9875FA',
        backgroundColor: '#9875FA',
        pointStyle: 'circle',
        pointRadius: 7,
        showLine: false,
      },
      {
        label: 'Axion +20%',
        data: [null, null, null, 120, null, null],
        borderColor: '#E11D48',
        backgroundColor: '#E11D48',
        pointStyle: 'circle',
        pointRadius: 7,
        showLine: false,
      },
    ],
  };

  const radarData = {
    labels: [
      'Perfil unificado (CDP)',
      'Segmentación automática',
      'Mensajería omnicanal',
      'B2C y B2B',
      'Autonomía operativa',
      'Analytics de negocio',
    ],
    datasets: [
      {
        label: 'Loyalty básico',
        data: [25, 20, 30, 15, 35, 20],
        borderColor: '#91909D',
        backgroundColor: 'rgba(145,144,157,.15)',
        borderWidth: 1.5,
        borderDash: [4, 3],
        pointRadius: 3,
      },
      {
        label: 'Qurable',
        data: [92, 90, 88, 95, 90, 85],
        borderColor: '#6430F7',
        backgroundColor: 'rgba(100,48,247,.2)',
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#6430F7',
      },
    ],
  };

  const churnData = {
    labels: [
      'Falta de personalización',
      'Mejores precios en competencia',
      'Fricción en la experiencia',
      'Programa de puntos complejo',
    ],
    datasets: [
      {
        label: '% impacto en abandono',
        data: [42, 28, 18, 12],
        backgroundColor: ['#E11D48', '#F59E0B', '#91909D', '#BFBDC5'],
        borderRadius: 4,
      },
    ],
  };

  const features = [
    {
      title: 'Loyalty & Rewards',
      desc: 'Sistema de puntos automatizado con niveles VIP y badges personalizados',
      icon: '🏆',
    },
    {
      title: 'Cupones & Descuentos',
      desc: 'Cupones digitales con seguimiento en tiempo real y compartición con socios',
      icon: '🎟️',
    },
    {
      title: 'Promociones Inteligentes',
      desc: 'Descuentos automáticos con calendario, A/B testing y tracking de ROI',
      icon: '🎯',
    },
    {
      title: 'Misiones & Gamificación',
      desc: 'Convierte las compras en un juego con desafíos y recompensas',
      icon: '🎮',
    },
    {
      title: 'Segmentación Avanzada',
      desc: 'Segmentos de clientes que se actualizan automáticamente',
      icon: '📊',
    },
    {
      title: 'Mensajería Omnicanal',
      desc: 'Email, Instagram DMs y notificaciones automáticas unificadas',
      icon: '💬',
    },
    {
      title: 'Analytics & Insights',
      desc: 'Métricas de rendimiento, ROI y análisis de contenido en tiempo real',
      icon: '📈',
    },
    {
      title: 'API & Integraciones',
      desc: 'REST API completa con webhooks firmados y rate limiting',
      icon: '🔌',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#EBE4FF] to-[#FFFFFF] border-b border-[#D7D6DB]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 bg-[#CBBAFC] text-[#2D1C5D] rounded-full text-sm font-medium mb-6">
              Qurable
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2F2E35] mb-6">
              La plataforma de loyalty
              <br />
              <span className="text-[#6430F7]">que realmente funciona</span>
            </h1>
            <p className="text-xl text-[#63626F] max-w-3xl mx-auto mb-8">
              CDP + Loyalty + Mensajería omnicanal. Aumentá la retención hasta un 27% y convertí clientes ocasionales en
              fans de tu marca.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-[#6430F7] text-[#FFFFFF] rounded-lg font-medium hover:bg-[#4320A5] transition-colors">
                Agendá una demo ↗
              </button>
              <button className="px-8 py-3 bg-[#FFFFFF] text-[#3A3941] rounded-lg font-medium border border-[#BFBDC5] hover:bg-[#FAFAFA] transition-colors">
                Ver resultados
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Real Results */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">Resultados reales</p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">Clientes que ya usan Qurable</h2>
          <p className="text-[#63626F] mt-2">Casos documentados de impacto en retención y recompra</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#D7D6DB]">
            <div className="text-sm text-[#63626F] mb-1">Dexter — recompra</div>
            <div className="text-3xl font-semibold text-[#6430F7]">+30%</div>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#D7D6DB]">
            <div className="text-sm text-[#63626F] mb-1">Axion — retención</div>
            <div className="text-3xl font-semibold text-[#6430F7]">+20%</div>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#D7D6DB]">
            <div className="text-sm text-[#63626F] mb-1">Retención → beneficio</div>
            <div className="text-3xl font-semibold text-[#6430F7]">+25-95%</div>
          </div>
          <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#D7D6DB]">
            <div className="text-sm text-[#63626F] mb-1">CAC vs retención</div>
            <div className="text-3xl font-semibold text-[#6430f7]">5x más efectivo</div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">Calculadora de ROI</p>
            <h2 className="text-3xl font-bold text-[#2F2E35]">Tu negocio, tus números</h2>
            <p className="text-[#63626F] mt-2">Ingresá los datos de tu operación actual y calculamos el impacto potencial de Qurable</p>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-8 max-w-4xl mx-auto">
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
                />
                <div className="text-sm font-medium text-[#2F2E35] mt-1">{fmt(clients)}</div>
              </div>
              <div>
                <label className="text-sm text-[#63626F] block mb-2">Ticket promedio mensual (USD)</label>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={ticket}
                  onChange={(e) => setTicket(parseInt(e.target.value))}
                  className="w-full"
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
                />
                <div className="text-sm font-medium text-[#2F2E35] mt-1">{retention}%</div>
              </div>
            </div>

            <div className="border border-[#D7D6DB] rounded-lg p-6 bg-[#FAFAFA] space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-[#D7D6DB]">
                <span className="text-sm text-[#63626F]">Revenue actual (12 meses)</span>
                <span className="text-base font-medium text-[#2F2E35]">{fmtUSD(results.revCurrent)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#D7D6DB]">
                <span className="text-sm text-[#63626F]">Revenue proyectado con Qurable (12 meses)</span>
                <span className="text-base font-medium text-[#6430F7]">{fmtUSD(results.revQurable)}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#D7D6DB]">
                <span className="text-sm text-[#63626F]">Revenue incremental estimado</span>
                <span className="text-base font-medium text-[#6430F7]">+{fmtUSD(results.revDelta)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#63626F]">Tiempo de recuperación de inversión</span>
                <span className="text-base font-medium text-[#2F2E35]">{results.payback} meses</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#EBE4FF] border border-[#B298FB] rounded-lg flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-[#2D1C5D] flex-1">
                Con <strong>{fmt(clients)} clientes</strong> y ticket de <strong>USD {ticket}</strong>, Qurable podría
                generar <strong>+{fmtUSD(results.revDelta)} adicionales</strong> en 12 meses.
              </div>
              <button className="px-6 py-2 bg-[#4320A5] text-[#EBE4FF] rounded-lg text-sm font-medium hover:bg-[#32187C] transition-colors whitespace-nowrap">
                Agendá una demo ↗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CLV Chart */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">Proyección de CLV</p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">Retención transaccional vs. retención con datos</h2>
          <p className="text-[#63626F] mt-2">El mismo cliente, dos estrategias. La diferencia a 24 meses es el argumento.</p>
        </div>

        <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-8">
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#63626F]">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#91909D] rounded-sm"></span>
              Loyalty básico (transaccional)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#6430F7] rounded-sm"></span>
              Qurable (CDP + loyalty + mensajería)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#9875FA] rounded-full"></span>
              Dexter +30%
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-[#E11D48] rounded-full"></span>
              Axion +20%
            </span>
          </div>
          <div className="h-80">
            <Line
              data={clvData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: { mode: 'index', intersect: false },
                },
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 80,
                    title: {
                      display: true,
                      text: 'Valor acumulado (índice 100 = mes 1)',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Benchmark & Churn Charts */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Radar Chart */}
            <div>
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                  Benchmark de capacidades
                </p>
                <h2 className="text-2xl font-bold text-[#2F2E35]">Loyalty básico vs. Qurable</h2>
                <p className="text-[#63626F] text-sm mt-2">
                  Capacidades evaluadas en 6 dimensiones clave para marketing managers
                </p>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#63626F]">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#91909D] rounded-sm"></span>
                    Loyalty básico
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#6430F7] rounded-sm"></span>
                    Qurable
                  </span>
                </div>
                <div className="h-80">
                  <Radar
                    data={radarData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: {
                        r: {
                          min: 0,
                          max: 100,
                          ticks: { stepSize: 25 },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Churn Chart */}
            <div>
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                  Por qué abandonan los clientes
                </p>
                <h2 className="text-2xl font-bold text-[#2F2E35]">Las causas raíz del churn en retail</h2>
                <p className="text-[#63626F] text-sm mt-2">
                  Cada una de estas causas es un problema que Qurable resuelve directamente
                </p>
              </div>
              <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#63626F]">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-[#E11D48] rounded-sm"></span>
                    % de impacto en abandono
                  </span>
                </div>
                <div className="h-80">
                  <Bar
                    data={churnData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      indexAxis: 'y',
                      plugins: { legend: { display: false } },
                      scales: {
                        x: {
                          beginAtZero: true,
                          max: 100,
                          ticks: {
                            callback: (value) => value + '%',
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">Plataforma completa</p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">Todo lo que necesitás en un solo lugar</h2>
          <p className="text-[#63626F] mt-2">De loyalty a analytics, pasando por mensajería omnicanal</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#FFFFFF] border border-[#D7D6DB] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-[#2F2E35] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#63626F]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-[#6430F7] to-[#4320A5] text-[#FFFFFF] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">¿Listo para transformar tu programa de loyalty?</h2>
          <p className="text-xl text-[#CBBAFC] mb-8">
            Hablá con nuestro equipo y descubrí cómo Qurable puede ayudarte a retener más clientes y aumentar tus ventas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-[#FFFFFF] text-[#4320A5] rounded-lg font-medium hover:bg-[#EBE4FF] transition-colors">
              Agendá una demo gratuita
            </button>
            <button className="px-8 py-3 bg-[#32187C] text-[#FFFFFF] rounded-lg font-medium hover:bg-[#2D1C5D] transition-colors border border-[#9875FA]">
              Ver documentación
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#2F2E35] text-[#A9A8B2] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© 2026 Qurable. Todos los derechos reservados.</p>
          <p className="text-xs mt-2">
            CDP + Loyalty + Mensajería omnicanal para retail B2C y B2B
          </p>
        </div>
      </div>
    </div>
  );
}