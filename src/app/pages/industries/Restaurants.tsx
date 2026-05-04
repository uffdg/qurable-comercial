import { Link } from 'react-router';
import {
  ArrowLeft,
  UtensilsCrossed,
  Brain,
  Trophy,
  Database,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import RoiCalculator from '../../components/sections/RoiCalculator';

const ACCENT = '#F97316';
const ACCENT_DARK = '#C2410C';
const ACCENT_BG = '#FFEDD5';

export default function Restaurants() {
  return (
    <div className="q-page min-h-screen bg-[#F8F7F5]">
      <div className="q-nav border-b border-black/5 bg-[#F8F7F5]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#63626F] hover:text-[#2F2E35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas las industrias
          </Link>
          <div className="text-xs font-medium text-[#91909D]">Qurable · Restaurants</div>
        </div>
      </div>

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
              <UtensilsCrossed className="w-4 h-4" />
              Gastronomía y Restaurantes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E35] mb-5 leading-tight">
              Los mejores clientes ya están en la base.
              <br />
              <span style={{ color: ACCENT }}>Qurable los activa.</span>
            </h1>
            <p className="text-lg text-[#63626F] mb-8">
              Qurable identifica, entiende y activa a cada cliente en cada canal: tienda, redes,
              WhatsApp y momento del pago. Del primer contacto al hábito de compra, con datos
              propios, personalización y beneficios relevantes.
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

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Churn de huéspedes en 2026" value="45%" tone="negative" />
          <StatCard label="Abandono de apps en 90 días" value="80%" tone="negative" />
          <StatCard label="Insatisfacción con loyalty actual" value="28%" tone="negative" />
          <StatCard label="Comisiones de agregadores" value="hasta 30%" tone="warning" />
        </div>
      </div>

      {/* Problem */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                Por qué los programas legacy fallan
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Recompensas escondidas, canales rotos, hábitos no construidos
              </h2>
              <p className="text-[#63626F] mb-4">
                Las tarjetas de sellos digitalizadas y los descuentos genéricos perdieron filo:
                <strong> más del 50% de los miembros nunca revisa sus recompensas</strong>.
              </p>
              <p className="text-[#63626F]">
                Los kioscos frustran al 23% de quienes intentan canjear, los drive-thru ignoran al miembro
                y la app premia siempre lo mismo. Resultado: el agregador se queda con la relación, y vos pagás la comisión.
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-lg font-semibold text-[#2F2E35] mb-4">Obstáculos en fidelización gastronómica</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D7D6DB] text-[#91909D]">
                    <th className="text-left py-2 font-medium">Obstáculo</th>
                    <th className="text-right py-2 font-medium">Impacto</th>
                  </tr>
                </thead>
                <tbody className="text-[#3A3941]">
                  <Row left="Abandono de apps de delivery" right="80% en 90 días" accent={ACCENT} />
                  <Row left="Miembros que no revisan recompensas" right=">50%" accent={ACCENT} />
                  <Row left="Frustración en kioscos por loyalty" right="23%" accent={ACCENT} />
                  <Row left="Churn 2026" right="45%" accent={ACCENT} last />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Datos propios y personalización */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
            Datos propios y personalización
          </p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">
            De descuentos genéricos a relevancia predictiva
          </h2>
          <p className="text-[#63626F] mt-2 max-w-2xl mx-auto">
            Tres capacidades que convierten programas legacy en plataformas de hábito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <Capability
            icon={<Brain className="w-6 h-6" />}
            title="IA de propensión"
            description="Identificar quién es más probable que ordene en los próximos 7 días y enviarle el incentivo justo, en el canal correcto."
          />
          <Capability
            icon={<TrendingUp className="w-6 h-6" />}
            title="Bounce backs automáticos"
            description="Cupón a los 7 días para asegurar la primera orden móvil, otro a los 30 para cimentar el hábito. Construir frecuencia, no descuentos."
          />
          <Capability
            icon={<Trophy className="w-6 h-6" />}
            title="Desafíos gamificados"
            description="El 75% de los participantes ordena por encima de su promedio. La frecuencia se multiplica 2.3x sin erosionar margen."
          />
        </div>
      </div>

      {/* First-party data */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                Propiedad del cliente
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Datos first-party: la única forma de proteger el margen
              </h2>
              <p className="text-[#63626F] mb-6">
                Las marcas exitosas usan sus propios canales para ofrecer beneficios que el agregador no puede:
                acceso VIP, menús secretos, experiencias exclusivas. Eso reduce dependencia y devuelve el ticket completo a tu P&L.
              </p>
              <ul className="space-y-3 text-[#3A3941]">
                <Item text="Captura del huésped en canal propio (web/app/QR en mesa)" />
                <Item text="Recompensas no monetarias que generan estatus y pertenencia" />
                <Item text="Segmentación por daypart, ticket promedio y categoría preferida" />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
                >
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#91909D]">Frecuencia</div>
                  <div className="text-2xl font-semibold text-[#2F2E35]">+2.3x</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <ResultRow label="Pedidos por encima del promedio" value="75%" />
                <ResultRow label="Reducción de dependencia de agregadores" value="—30%" />
                <ResultRow label="Margen recuperado por orden directa" value="+10–15pp" last />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <RoiCalculator
        accent={ACCENT}
        accentDark={ACCENT_DARK}
        accentBg={ACCENT_BG}
        industry="restaurante"
        defaultClients={6000}
        defaultTicket={25}
        defaultRetention={30}
        ticketLabel="Ticket promedio mensual por cliente (USD)"
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
                Un programa que vive en cada canal y aprende de cada orden
              </h2>
              <ul className="space-y-3 text-[#3A3941]">
                <SolutionItem text="Identidad única entre app, web, kiosco, drive-thru y POS." />
                <SolutionItem text="Misiones, niveles y bounce backs configurables sin desarrollo." />
                <SolutionItem text="Mensajería omnicanal con triggers de propensión basados en IA." />
                <SolutionItem text="Reportes de cohortes, RFM y atribución por canal propio." />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-sm uppercase tracking-wider text-[#91909D] mb-4">Resultado esperado</h3>
              <div className="space-y-4">
                <BigResult value="+30%" label="recompra incremental" accent={ACCENT} />
                <BigResult value="+2.3x" label="frecuencia en miembros activos" accent={ACCENT} />
                <BigResult value="-45%" label="dependencia de cupón genérico" accent={ACCENT} />
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
            Recuperá la relación con tu cliente, no la cedas a la app del medio
          </h2>
          <p className="text-[#BFBDC5] mb-8">
            Te mostramos cómo Qurable convierte tu programa en una máquina de frecuencia, no en otro descuento más.
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
  const colors = { positive: '#10B981', negative: '#E11D48', warning: '#F59E0B' };
  return (
    <div className="bg-[#FAFAFA] rounded-lg p-6 border border-[#D7D6DB]">
      <div className="text-xs text-[#63626F] mb-1">{label}</div>
      <div className="text-3xl font-semibold" style={{ color: colors[tone] }}>
        {value}
      </div>
    </div>
  );
}

function Row({ left, right, accent, last }: { left: string; right: string; accent: string; last?: boolean }) {
  return (
    <tr className={last ? '' : 'border-b border-[#ECECF0]'}>
      <td className="py-3">{left}</td>
      <td className="text-right font-semibold" style={{ color: accent }}>
        {right}
      </td>
    </tr>
  );
}

function Capability({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

function Item({ text }: { text: string }) {
  return (
    <li className="flex gap-2">
      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
      <span className="text-sm">{text}</span>
    </li>
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

function ResultRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex justify-between items-center py-2 ${last ? '' : 'border-b border-[#ECECF0]'}`}>
      <span className="text-[#63626F]">{label}</span>
      <span className="font-semibold text-[#2F2E35]">{value}</span>
    </div>
  );
}

function BigResult({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="flex items-baseline gap-3 pb-3 border-b border-[#ECECF0] last:border-0">
      <span className="text-3xl font-bold" style={{ color: accent }}>
        {value}
      </span>
      <span className="text-sm text-[#63626F]">{label}</span>
    </div>
  );
}
