import { Link } from 'react-router';
import {
  ArrowLeft,
  Fuel,
  MapPin,
  Smartphone,
  Coffee,
  CheckCircle2,
  Timer,
  Tag,
} from 'lucide-react';
import RoiCalculator from '../../components/sections/RoiCalculator';

const ACCENT = '#F59E0B';
const ACCENT_DARK = '#B45309';
const ACCENT_BG = '#FEF3C7';

export default function GasOil() {
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
          <div className="text-xs font-medium text-[#91909D]">Qurable · Fuel & Convenience</div>
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
              <Fuel className="w-4 h-4" />
              Combustibles y C-Stores
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E35] mb-5 leading-tight">
              Ganar al cliente no comprometido,
              <br />
              <span style={{ color: ACCENT }}>sin sacrificar tu margen</span>
            </h1>
            <p className="text-lg text-[#63626F] mb-8">
              81% de los conductores compara precios y el 77% decide en menos de 2 horas.
              La salida no es descuento universal: es personalización en tiempo real y conversión pump-to-store.
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
          <StatCard label="Comparan precios entre estaciones" value="81%" tone="warning" />
          <StatCard label="Decide en <2 horas" value="77%" tone="warning" />
          <StatCard label="Incremento gasto por miembro" value="12–30%" tone="positive" />
          <StatCard label="Frecuencia combustible + tienda" value="2.6x" tone="positive" />
        </div>
      </div>

      {/* Problem */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                El cliente no comprometido
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Comoditización extrema y ventana de decisión que se cierra
              </h2>
              <p className="text-[#63626F] mb-4">
                La demanda de combustible probablemente nunca vuelva a niveles prepandemia. El margen
                "nuevo normal" ronda los 40 centavos por galón. Cada descuento universal erosiona ese margen
                sin cambiar el comportamiento.
              </p>
              <p className="text-[#63626F]">
                Los líderes ya no compiten por galones: compiten por convertir esa parada en una compra
                de alta rentabilidad dentro de la tienda.
              </p>
            </div>

            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-lg font-semibold text-[#2F2E35] mb-4">Dinámica del sector</h3>
              <div className="space-y-4 text-sm">
                <DataRow icon={<Tag className="w-4 h-4" />} label="Comparación de precios" value="81%" />
                <DataRow icon={<Timer className="w-4 h-4" />} label="Ventana de decisión" value="<2 hrs" />
                <DataRow icon={<Fuel className="w-4 h-4" />} label="Margen nuevo normal" value="~40¢/gal" />
                <DataRow
                  icon={<Coffee className="w-4 h-4" />}
                  label="Multiplicador combustible+tienda"
                  value="2.6x"
                  last
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy: Personalization */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
            Estrategia de personalización
          </p>
          <h2 className="text-3xl font-bold text-[#2F2E35]">
            Descuentos quirúrgicos para proteger el margen
          </h2>
          <p className="text-[#63626F] mt-2 max-w-2xl mx-auto">
            Las plataformas líderes ya prueban el modelo: ofertar solo a los clientes no comprometidos,
            no a quienes ya hubieran venido de todos modos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <Capability
            icon={<MapPin className="w-6 h-6" />}
            title="Geolocalización + tiempo"
            description="Notificaciones cuando el cliente está dentro de la ventana de decisión, no antes ni después."
          />
          <Capability
            icon={<Smartphone className="w-6 h-6" />}
            title="Pago móvil sin fricción"
            description="Pagar desde el vehículo abre canal directo de comunicación y entrega recompensas instantáneas."
          />
          <Capability
            icon={<Coffee className="w-6 h-6" />}
            title="Pump-to-store"
            description="Café, bocadillos, comida lista: convertir surtidor en tienda es donde aparece el margen real."
          />
        </div>
      </div>

      {/* Programs */}
      <div className="bg-[#FAFAFA] border-y border-[#D7D6DB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#91909D] uppercase mb-2">
                Programas que están funcionando
              </p>
              <h2 className="text-3xl font-bold text-[#2F2E35] mb-5">
                Pago integrado, recompensa instantánea y la app que te paga el cargado
              </h2>
              <p className="text-[#63626F] mb-4">
                Los programas líderes ya integran pago, recompensa y conversión cruzada en un mismo flujo.
                La combinación de combustible + tienda eleva la frecuencia 2.6x respecto a quien participa en una sola categoría.
              </p>
              <ul className="space-y-3 text-[#3A3941]">
                <Item text="Recompensas instantáneas al pagar desde el surtidor" />
                <Item text="Ofertas dinámicas por daypart y clima" />
                <Item text="Cross-sell automático a categorías de mayor margen" />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-8">
              <h3 className="text-sm uppercase tracking-wider text-[#91909D] mb-4">Conversión pump-to-store</h3>
              <div className="space-y-4">
                <BigKPI value="2.6x" label="frecuencia con cross-category" accent={ACCENT} />
                <BigKPI value="+12–30%" label="gasto por miembro activo" accent={ACCENT} />
                <BigKPI value="40¢/gal" label="margen protegido por personalización" accent={ACCENT} />
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
        industry="red"
        defaultClients={15000}
        defaultTicket={60}
        defaultRetention={45}
        ticketLabel="Gasto mensual por cliente (USD)"
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
                CDP + reglas en tiempo real para combustible y conveniencia
              </h2>
              <ul className="space-y-3 text-[#3A3941]">
                <SolutionItem text="Detección de cliente no comprometido por patrón de visita." />
                <SolutionItem text="Ofertas geolocalizadas dentro de la ventana de decisión." />
                <SolutionItem text="Bundles combustible + tienda con incentivo segmentado." />
                <SolutionItem text="Integración nativa con app de pago, POS y bombas." />
              </ul>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6">
              <h3 className="text-sm uppercase tracking-wider text-[#91909D] mb-4">Lo que vas a medir</h3>
              <div className="space-y-3 text-sm">
                <KPI label="Conversión pump-to-store" value="+24%" accent={ACCENT} />
                <KPI label="Gasto incremental por miembro" value="+18%" accent={ACCENT} />
                <KPI label="Margen protegido vs descuento universal" value="+11pp" accent={ACCENT} />
                <KPI label="Frecuencia mensual" value="+2.1x" accent={ACCENT} last />
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
            Convertí cada parada en una compra rentable
          </h2>
          <p className="text-[#BFBDC5] mb-8">
            Te mostramos cómo Qurable identifica al cliente no comprometido, lo activa en tiempo real y lo lleva al interior de tu tienda.
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

function Capability({
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

function DataRow({
  icon,
  label,
  value,
  last,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2 ${last ? '' : 'border-b border-[#ECECF0]'}`}
    >
      <div className="flex items-center gap-2 text-[#63626F]">
        <span style={{ color: ACCENT }}>{icon}</span>
        {label}
      </div>
      <span className="font-semibold text-[#2F2E35]">{value}</span>
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

function BigKPI({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="flex items-baseline gap-3 pb-3 border-b border-[#ECECF0] last:border-0">
      <span className="text-3xl font-bold" style={{ color: accent }}>
        {value}
      </span>
      <span className="text-sm text-[#63626F]">{label}</span>
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
