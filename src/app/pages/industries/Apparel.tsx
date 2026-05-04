import { Link } from 'react-router';
import {
  ArrowLeft,
  Shirt,
  Recycle,
  Store,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import RoiCalculator from '../../components/sections/RoiCalculator';

const ACCENT = '#EC4899';
const ACCENT_DARK = '#BE185D';
const ACCENT_BG = '#FCE7F3';

export default function Apparel() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="border-b border-[#D7D6DB] bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-[#63626F] hover:text-[#2F2E35] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Todas las industrias
          </Link>
          <div className="text-xs font-medium text-[#91909D]">Qurable · Apparel & Fashion</div>
        </div>
      </div>

      <div
        className="border-b border-[#D7D6DB]"
        style={{ background: `linear-gradient(135deg, ${ACCENT_BG} 0%, #FFFFFF 100%)` }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
            >
              <Shirt className="w-4 h-4" />
              Indumentaria y Moda
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E35] mb-5 leading-tight">
              Las devoluciones son el problema.
              <br />
              <span style={{ color: ACCENT }}>La lealtad es la solución.</span>
            </h1>
            <p className="text-lg text-[#63626F] mb-8">
              Con 16.9% de devoluciones en 2024, el sector necesita programas que reduzcan fricción de compra,
              integren retail circular y construyan comunidad. Phygital, omnicanal, sin precios inconsistentes.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="px-7 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: ACCENT }}
              >
                Agendá una demo ↗
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
          <StatCard label="Tasa de devolución 2024" value="16.9%" tone="negative" />
          <StatCard label="Mercancía estancada (USD)" value="cientos de miles M" tone="negative" />
          <StatCard label="Ahorro con alteraciones VIP" value="-devoluciones" tone="positive" />
          <StatCard label="Gymshark a 10M de clientes" value="10 años" tone="positive" />
        </div>
      </div>

      {/* Loyalty as a solution */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
              Lealtad como servicio operativo
            </p>
            <h2 className="text-3xl font-bold text-[#2F2E35]">
              Beneficios que reducen el riesgo de la compra y elevan la conversión
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <BenefitCard
              icon={<RotateCcw className="w-5 h-5" />}
              title="Procesamiento prioritario BOPIS"
              description="Ahorra tiempo al miembro y aumenta el tráfico físico. La mejor recompensa también es operativa."
            />
            <BenefitCard
              icon={<Shirt className="w-5 h-5" />}
              title="Alteraciones gratuitas en niveles altos"
              description="Garantizar el calce reduce drásticamente las devoluciones y eleva el NPS del segmento más rentable."
            />
            <BenefitCard
              icon={<Store className="w-5 h-5" />}
              title="Misiones de prueba en tienda"
              description="Recompensar visitas al probador convierte foot traffic en conversión con efecto medible."
            />
            <BenefitCard
              icon={<Recycle className="w-5 h-5" />}
              title="Créditos por retail circular"
              description="Devolver, intercambiar o reciclar genera puntos y construye un ciclo cerrado de producto."
            />
          </div>
        </div>
      </div>

      {/* Phygital */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
              Omnicanalidad phygital
            </p>
            <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
              El programa como tejido conectivo entre social, web y tienda
            </h2>
            <p className="text-[#63626F] mb-4">
              El miembro debería empezar el journey en una red social y terminarlo con BOPIS sin notar
              la frontera. Eso requiere precios consistentes, branding alineado y recomendaciones que
              integren historial digital con compras físicas.
            </p>
            <p className="text-[#63626F]">
              Marcas como <strong>Nike</strong> resuelven esto con cuenta unificada. Marcas como <strong>Gymshark</strong> escalaron
              a 10M de clientes en 10 años construyendo comunidad alrededor de valores compartidos.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
            <h3 className="text-lg font-semibold text-[#2F2E35] mb-4">Recompensas no transaccionales</h3>
            <ul className="space-y-3 text-sm text-[#3A3941]">
              <Item text="Completar perfil de estilo y medidas" />
              <Item text="Escribir reseñas con foto" />
              <Item text="Compartir outfits en redes sociales" />
              <Item text="Asistir a drops y eventos exclusivos" />
              <Item text="Donar prendas para programas circulares" />
            </ul>
            <div className="mt-6 pt-4 border-t border-[#ECECF0]">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#63626F]">Frecuencia de visita en miembros activos</span>
                <span className="font-semibold" style={{ color: ACCENT }}>
                  +2.1x
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cases */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
              Referentes del sector
            </p>
            <h2 className="text-3xl font-bold text-[#2F2E35]">
              Cómo Gymshark y Nike redefinieron la lealtad en moda
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <CaseCard
              brand="Gymshark"
              insight="0 → 10 millones de clientes en una década"
              description="Construyó comunidad antes que catálogo. Salud, inclusividad y marketing de influencers como tejido emocional."
            />
            <CaseCard
              brand="Nike"
              insight="Cuenta unificada app + web + tienda física"
              description="Identidad de miembro que sigue al cliente. Recomendaciones curadas con datos de navegación digital y compras físicas."
            />
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <RoiCalculator
        accent={ACCENT}
        accentDark={ACCENT_DARK}
        accentBg={ACCENT_BG}
        industry="marca"
        defaultClients={10000}
        defaultTicket={80}
        defaultRetention={32}
        ticketLabel="Ticket promedio por compra (USD)"
      />

      {/* Qurable solution */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-2xl border border-[#D7D6DB] p-8 md:p-12 bg-gradient-to-br from-[#EBE4FF] to-[#FFFFFF]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#6430F7] uppercase mb-2">
                Cómo lo resuelve Qurable
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Un programa que cose lo digital con lo físico, sin costuras visibles
              </h2>
              <ul className="space-y-3 text-[#3A3941]">
                <SolutionItem text="Cuenta única entre eCommerce, app, redes y POS." />
                <SolutionItem text="Recompensas de servicio: BOPIS prioritario, alteraciones, retornos sin fricción." />
                <SolutionItem text="Engagement no transaccional: misiones, contenido, perfil de estilo." />
                <SolutionItem text="Programa circular nativo con créditos por entrega de prendas." />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-sm uppercase tracking-wider text-[#91909D] mb-4">Lo que cambia</h3>
              <div className="space-y-3 text-sm">
                <KPI label="Devoluciones en miembros con alteraciones" value="-22%" accent={ACCENT} />
                <KPI label="Conversión móvil por misiones" value="+18%" accent={ACCENT} />
                <KPI label="Frecuencia phygital" value="+2.1x" accent={ACCENT} />
                <KPI label="Tickets multicanal" value="+34%" accent={ACCENT} last />
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
      <div className="bg-[#2F2E35] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Convertí cada devolución en una oportunidad de relación
          </h2>
          <p className="text-[#BFBDC5] mb-8">
            Te mostramos cómo Qurable opera el programa como un activo logístico, comercial y emocional al mismo tiempo.
          </p>
          <button
            className="px-8 py-3 rounded-lg font-medium text-white transition-colors"
            style={{ backgroundColor: ACCENT }}
          >
            Agendá una demo ↗
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
      <div className="text-2xl md:text-3xl font-semibold" style={{ color: colors[tone] }}>
        {value}
      </div>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6 flex gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[#2F2E35] mb-1">{title}</h4>
        <p className="text-sm text-[#63626F]">{description}</p>
      </div>
    </div>
  );
}

function CaseCard({
  brand,
  insight,
  description,
}: {
  brand: string;
  insight: string;
  description: string;
}) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
      <div className="text-xs uppercase tracking-wider text-[#91909D] mb-2">Caso</div>
      <h3 className="text-2xl font-bold text-[#2F2E35] mb-3">{brand}</h3>
      <p className="text-sm font-medium mb-3" style={{ color: ACCENT }}>
        {insight}
      </p>
      <p className="text-sm text-[#63626F]">{description}</p>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <li className="flex gap-2">
      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: ACCENT }} />
      <span>{text}</span>
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

function KPI({ label, value, accent, last }: { label: string; value: string; accent: string; last?: boolean }) {
  return (
    <div className={`flex justify-between items-center pb-2 ${last ? '' : 'border-b border-[#ECECF0]'}`}>
      <span className="text-[#63626F]">{label}</span>
      <span className="font-semibold" style={{ color: accent }}>
        {value}
      </span>
    </div>
  );
}

