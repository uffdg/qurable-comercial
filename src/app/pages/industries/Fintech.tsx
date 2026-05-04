import { Link } from 'react-router';
import {
  ArrowLeft,
  Landmark,
  Calculator,
  ShieldCheck,
  Zap,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import RoiCalculator from '../../components/sections/RoiCalculator';

const ACCENT = '#10B981';
const ACCENT_DARK = '#047857';
const ACCENT_BG = '#D1FAE5';

export default function Fintech() {
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
          <div className="text-xs font-medium text-[#91909D]">Qurable · Fintech & Banking</div>
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
              <Landmark className="w-4 h-4" />
              Fintech y Banca
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E35] mb-5 leading-tight">
              El cliente tiene la cuenta.
              <br />
              <span style={{ color: ACCENT }}>Ahora hay que construir la relación.</span>
            </h1>
            <p className="text-lg text-[#63626F] mb-8">
              En servicios financieros el producto se parece cada vez más entre competidores. La
              relación es el diferencial sostenible: cada transacción puede convertirse en un evento
              de engagement.
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
          <StatCard label="Clientes que generan 90% del profit" value="10%" tone="positive" />
          <StatCard label="Tasa de churn anual promedio" value="25%" tone="negative" />
          <StatCard label="Confianza tras 1 transacción fallida" value="frágil" tone="negative" />
          <StatCard label="Uplift con cross-sell predictivo" value="+18%" tone="positive" />
        </div>
      </div>

      {/* CLV Modeling */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                CLV como métrica de gestión
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Cinco principios para gestionar valor de vida en banca
              </h2>
              <ul className="space-y-3 text-[#3A3941]">
                <Item text="Segmentación por valor económico real" />
                <Item text="Pronósticos automatizados basados en datos transaccionales" />
                <Item text="Predicción de lealtad por comportamiento" />
                <Item text="Análisis de impulsores de abandono (churn drivers)" />
                <Item text="Cultura de prueba y aprendizaje continuo" />
              </ul>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
                >
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#2F2E35]">Fórmula de CLV</h3>
              </div>
              <div className="bg-[#FAFAFA] rounded-lg p-5 border border-[#ECECF0] font-mono text-sm text-[#3A3941] mb-4">
                <div className="text-center text-[#2F2E35] font-semibold mb-3">CLV = Σ [(Rₜ − Cₜ) · Sₜ / (1 + d)ᵗ] − A</div>
                <div className="text-xs text-[#63626F] space-y-1">
                  <div>
                    <strong className="text-[#2F2E35]">Rₜ</strong>: ingreso en el período t
                  </div>
                  <div>
                    <strong className="text-[#2F2E35]">Cₜ</strong>: costo de servicio
                  </div>
                  <div>
                    <strong className="text-[#2F2E35]">Sₜ</strong>: probabilidad de permanencia activa
                  </div>
                  <div>
                    <strong className="text-[#2F2E35]">d</strong>: tasa de descuento
                  </div>
                  <div>
                    <strong className="text-[#2F2E35]">A</strong>: costo de adquisición
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#91909D]">
                El CLV es el valor presente de los flujos netos esperados por cliente, descontados al
                costo de adquisición. Es la base para decidir cuánto invertir y a quién retener.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Segmentation */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
            Segmentos accionables
          </p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">
            Cuatro segmentos, cuatro jugadas distintas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <SegmentCard
            badge="VIP & High CLV"
            title="Alta rentabilidad"
            action="Servicios premium y advisory financiero personalizado."
          />
          <SegmentCard
            badge="Low Tenure"
            title="Nuevos (<1 año)"
            action="Onboarding gamificado, metas de ahorro y primeros logros visibles."
          />
          <SegmentCard
            badge="At-Risk"
            title="Churn probable"
            action="Intervención proactiva con ofertas de rescate antes del abandono."
          />
          <SegmentCard
            badge="Low Product"
            title="Un solo producto"
            action="Cross-sell de paquetes (nómina, seguros, tarjetas) por contexto."
          />
        </div>
      </div>

      {/* Friction reduction */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                Reducción de fricción digital
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Una transacción fallida puede destruir años de confianza
              </h2>
              <p className="text-[#63626F] mb-6">
                La retención bancaria no se gana con campañas: se gana parcheando los agujeros del cubo.
                Navegación sin esfuerzo, autoservicio robusto y transacciones impecables.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Pillar icon={<Zap className="w-5 h-5" />} title="Self-service" text="Congelar tarjetas, disputar cargos, abrir productos sin agente." />
                <Pillar icon={<ShieldCheck className="w-5 h-5" />} title="Confianza" text="Transparencia en tarifas, empatía en atención, cero sorpresas." />
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-lg font-semibold text-[#2F2E35] mb-4">Churn drivers principales</h3>
              <div className="space-y-4">
                <ChurnRow label="Falta de personalización" pct="42%" accent="#E11D48" />
                <ChurnRow label="Mejores precios en competencia" pct="28%" accent="#F59E0B" />
                <ChurnRow label="Fricción en la experiencia" pct="18%" accent="#91909D" />
                <ChurnRow label="Programa de puntos complejo" pct="12%" accent="#BFBDC5" />
              </div>
              <p className="text-xs text-[#91909D] mt-4 flex items-start gap-2">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>El 70% del churn se previene con personalización y experiencia, no con precio.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <RoiCalculator
        accent={ACCENT}
        accentDark={ACCENT_DARK}
        accentBg={ACCENT_BG}
        industry="banca"
        defaultClients={20000}
        defaultTicket={120}
        defaultRetention={75}
        ticketLabel="Ingreso mensual promedio por cliente (USD)"
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
                Engagement bancario centrado en CLV, no en campañas sueltas
              </h2>
              <ul className="space-y-3 text-[#3A3941]">
                <SolutionItem text="Modelado de CLV y churn por cliente, actualizado diariamente." />
                <SolutionItem text="Recompensas y beneficios por nivel de valor económico." />
                <SolutionItem text="Triggers de retención para clientes At-Risk antes del abandono." />
                <SolutionItem text="Cross-sell contextual de productos según patrón financiero." />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-sm uppercase tracking-wider text-[#91909D] mb-4">Lo que vas a mover</h3>
              <div className="space-y-3 text-sm">
                <KPI label="Reducción de churn anual" value="-6pp" accent={ACCENT} />
                <KPI label="Cross-sell en clientes Low Product" value="+24%" accent={ACCENT} />
                <KPI label="CLV promedio en VIP" value="+19%" accent={ACCENT} />
                <KPI label="NPS post-incidente" value="+22" accent={ACCENT} last />
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
            Parchá los agujeros del cubo antes de seguir adquiriendo
          </h2>
          <p className="text-[#BFBDC5] mb-8">
            Te mostramos cómo Qurable ordena tu base, predice el abandono y construye relaciones rentables que escalan.
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

function SegmentCard({
  badge,
  title,
  action,
}: {
  badge: string;
  title: string;
  action: string;
}) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-5">
      <div
        className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-3"
        style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
      >
        {badge}
      </div>
      <h4 className="font-semibold text-[#2F2E35] mb-2">{title}</h4>
      <p className="text-sm text-[#63626F]">{action}</p>
    </div>
  );
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#FFFFFF] rounded-lg border border-[#D7D6DB] p-4">
      <div
        className="w-8 h-8 rounded-md flex items-center justify-center mb-2"
        style={{ backgroundColor: ACCENT_BG, color: ACCENT_DARK }}
      >
        {icon}
      </div>
      <h5 className="font-semibold text-[#2F2E35] text-sm mb-1">{title}</h5>
      <p className="text-xs text-[#63626F]">{text}</p>
    </div>
  );
}

function ChurnRow({ label, pct, accent }: { label: string; pct: string; accent: string }) {
  const widthPct = parseInt(pct);
  return (
    <div>
      <div className="flex justify-between items-center text-sm mb-1">
        <span className="text-[#3A3941]">{label}</span>
        <span className="font-semibold" style={{ color: accent }}>
          {pct}
        </span>
      </div>
      <div className="h-2 bg-[#ECECF0] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${widthPct}%`, backgroundColor: accent }}
        />
      </div>
    </div>
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
