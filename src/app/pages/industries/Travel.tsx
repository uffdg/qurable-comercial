import { Link } from 'react-router';
import {
  ArrowLeft,
  Plane,
  Fingerprint,
  Sparkles,
  Users,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import RoiCalculator from '../../components/sections/RoiCalculator';

const ACCENT = '#0EA5E9';
const ACCENT_DARK = '#0369A1';
const ACCENT_BG = '#E0F2FE';

export default function Travel() {
  return (
    <div className="q-page min-h-screen bg-[#F8F7F5]">
      {/* Top bar */}
      <div className="q-nav border-b border-black/5 bg-[#F8F7F5]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#63626F] hover:text-[#2F2E35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas las industrias
          </Link>
          <div className="text-xs font-medium text-[#91909D]">Qurable · Travel & Hospitality</div>
        </div>
      </div>

      {/* Hero */}
      <div
        className="q-hero relative overflow-hidden border-b border-white/10"
        style={{ background: "radial-gradient(circle at 72% 18%, rgba(100,48,247,0.34), transparent 34%), radial-gradient(circle at 18% 82%, rgba(67,32,165,0.28), transparent 35%), #0D0C14" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
            >
              <Plane className="w-4 h-4" />
              Viajes y Hotelería
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E35] mb-5 leading-tight">
              Cada estadía y cada vuelo
              <br />
              <span style={{ color: ACCENT }}>pueden construir relación</span>
            </h1>
            <p className="text-lg text-[#63626F] mb-8">
              La diferencia ya no está solo en la tarifa o la habitación. Está en la relación.
              Qurable transforma cada interacción del viajero en una experiencia personalizada que
              impulsa preferencia, recompra y valor de largo plazo.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="px-7 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: ACCENT }}
              >
                Agendar demo ↗
              </button>
              <button className="px-7 py-3 bg-[#FFFFFF] text-[#3A3941] rounded-lg font-medium border border-[#BFBDC5] hover:bg-[#FAFAFA] transition-colors">
                Ver el análisis completo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key stats */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Aumento del CAC 2022–2025" value="+35%" tone="negative" />
          <StatCard label="Crecimiento del CLV mismo período" value="+4.5%" tone="negative" />
          <StatCard label="Presupuesto digital desperdiciado" value="27%" tone="negative" />
          <StatCard label="Marcas con medios integrados" value="9%" tone="warning" />
        </div>
      </div>

      {/* Problem: Identity Resolution */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                El problema central
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Confusión de identidad: viajes desconectados, presupuestos drenados
              </h2>
              <p className="text-[#63626F] mb-6">
                Sistemas de reserva desacoplados, CRMs inconsistentes entre app, contact center y
                terminales físicas. El resultado: el 27% de la inversión digital impacta a clientes
                que ya están en la base, mostrándoles ofertas irrelevantes.
              </p>
              <p className="text-[#63626F]">
                Los huéspedes cambian de marca tras solo <strong>2.4 experiencias negativas</strong>.
                Cada fricción no reconocida es churn anticipado.
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-lg font-semibold text-[#2F2E35] mb-4">
                Impacto de la resolución de identidad
              </h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D7D6DB] text-[#91909D]">
                    <th className="text-left py-2 font-medium">Iniciativa</th>
                    <th className="text-right py-2 font-medium">Impacto</th>
                  </tr>
                </thead>
                <tbody className="text-[#3A3941]">
                  <tr className="border-b border-[#ECECF0]">
                    <td className="py-3">Reducción del CAC</td>
                    <td className="text-right font-semibold" style={{ color: ACCENT }}>
                      hasta 23%
                    </td>
                  </tr>
                  <tr className="border-b border-[#ECECF0]">
                    <td className="py-3">Ahorro por cliente al limpiar datos</td>
                    <td className="text-right font-semibold" style={{ color: ACCENT }}>
                      ~USD 14
                    </td>
                  </tr>
                  <tr className="border-b border-[#ECECF0]">
                    <td className="py-3">Retención post-incidente</td>
                    <td className="text-right font-semibold" style={{ color: ACCENT }}>
                      +63%
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Conversión por search recovery</td>
                    <td className="text-right font-semibold" style={{ color: ACCENT }}>
                      15–25%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden opportunities */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
            Oportunidades ocultas
          </p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">
            Dos cohortes que están redefiniendo el ciclo de vida del viajero
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <OpportunityCard
            icon={<Users className="w-6 h-6" />}
            title="Generación Z: la lealtad que aún no fue capturada"
            kpi="14%"
            kpiLabel="de los miembros actuales de programas"
            bullets={[
              'Influyen masivamente en la planificación de viajes',
              'Esperan experiencias móviles fluidas y gamificadas',
              'Priorizan sostenibilidad e impacto social como filtros de marca',
            ]}
          />
          <OpportunityCard
            icon={<Briefcase className="w-6 h-6" />}
            title="Bleisure: el viajero híbrido como motor de CLV"
            kpi="50%"
            kpiLabel="planea trabajar durante su viaje más largo"
            bullets={[
              'Pasó del 33% al 50% en pocas temporadas',
              'Demanda co-working, conectividad premium y extensión de estadías',
              'Permite cross-sell hacia el componente "leisure" del viaje corporativo',
            ]}
          />
        </div>
      </div>

      {/* AI applications */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
              IA aplicada al ciclo del huésped
            </p>
            <h2 className="text-3xl font-bold text-[#2F2E35]">
              Cómo cierra la brecha de lealtad la inteligencia artificial
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <AICapabilityCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Mega Micro Merchandising"
              description="Vender la habitación exacta, el asiento con espacio específico, el upgrade adecuado al perfil. Personalización por atributo en tiempo real."
            />
            <AICapabilityCard
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Recovery proactivo"
              description="Anticipa retrasos y disrupciones. Ofrece vales, re-rutas y compensaciones antes de que el huésped tenga que pedirlas."
            />
            <AICapabilityCard
              icon={<Fingerprint className="w-6 h-6" />}
              title="Identidad unificada"
              description="Una vista única del huésped a través de reservas, app, contact center y stay. Convierte datos en reconocimiento."
            />
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <RoiCalculator
        accent={ACCENT}
        accentDark={ACCENT_DARK}
        accentBg={ACCENT_BG}
        industry="propiedad"
        defaultClients={8000}
        defaultTicket={180}
        defaultRetention={35}
        ticketLabel="Ticket promedio por estadía (USD)"
      />

      {/* Qurable solution */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="q-solution rounded-[28px] border border-[#D7D6DB] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#6430F7] uppercase mb-2">
                Cómo lo resuelve Qurable
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                CDP + Loyalty + Mensajería omnicanal, hechos para hospitality
              </h2>
              <ul className="space-y-3 text-[#3A3941]">
                <SolutionItem text="Resolución de identidad nativa entre PMS, app, web y centro de contacto." />
                <SolutionItem text="Tiers, puntos y atributos sincronizados al carrito y a la reserva en tiempo real." />
                <SolutionItem text="Triggers de recovery: search abandonment, post-stay y disrupción operativa." />
                <SolutionItem text="Programas pensados para Gen Z: gamificación, social y propósito." />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <div className="space-y-4">
                <ResultRow icon={<TrendingDown className="w-5 h-5" />} label="CAC" value="-23%" positive />
                <ResultRow icon={<TrendingUp className="w-5 h-5" />} label="Retención post-incidente" value="+63%" positive />
                <ResultRow icon={<TrendingUp className="w-5 h-5" />} label="Recuperación de búsquedas" value="+15–25%" positive />
                <ResultRow icon={<TrendingUp className="w-5 h-5" />} label="Tickets bleisure incrementales" value="+1.7x" positive />
              </div>
              <button
                className="mt-6 w-full px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: ACCENT }}
              >
                Quiero ver mi business case
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="q-dark-section text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para dejar de pagar dos veces por el mismo huésped?
          </h2>
          <p className="text-[#BFBDC5] mb-8">
            Te mostramos cómo Qurable unifica identidad, recompensa y comunicación en una sola plataforma para tu propiedad.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-medium text-white transition-colors"
            style={{ backgroundColor: ACCENT }}
          >
            Agendar demo ↗
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: 'positive' | 'negative' | 'warning';
}) {
  const colors = {
    positive: '#10B981',
    negative: '#E11D48',
    warning: '#F59E0B',
  };
  return (
    <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#D7D6DB]">
      <div className="text-xs text-[#63626F] mb-1">{label}</div>
      <div className="text-3xl font-semibold" style={{ color: colors[tone] }}>
        {value}
      </div>
    </div>
  );
}

function OpportunityCard({
  icon,
  title,
  kpi,
  kpiLabel,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  kpi: string;
  kpiLabel: string;
  bullets: string[];
}) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#2F2E35] mb-3">{title}</h3>
      <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-[#ECECF0]">
        <span className="text-3xl font-semibold" style={{ color: ACCENT }}>
          {kpi}
        </span>
        <span className="text-sm text-[#63626F]">{kpiLabel}</span>
      </div>
      <ul className="space-y-2 text-sm text-[#3A3941]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AICapabilityCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
      >
        {icon}
      </div>
      <h4 className="font-semibold text-[#2F2E35] mb-2">{title}</h4>
      <p className="text-sm text-[#63626F]">{description}</p>
    </div>
  );
}

function SolutionItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#6430F7]" />
      <span>{text}</span>
    </li>
  );
}

function ResultRow({
  icon,
  label,
  value,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#ECECF0] last:border-0">
      <div className="flex items-center gap-3">
        <span style={{ color: ACCENT }}>{icon}</span>
        <span className="text-sm text-[#63626F]">{label}</span>
      </div>
      <span
        className="text-lg font-semibold"
        style={{ color: positive ? ACCENT : '#E11D48' }}
      >
        {value}
      </span>
    </div>
  );
}
