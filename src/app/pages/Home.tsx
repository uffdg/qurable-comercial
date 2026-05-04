import { Link } from 'react-router';
import { Plane, UtensilsCrossed, Shirt, Fuel, Landmark, ArrowRight } from 'lucide-react';

const industries = [
  {
    slug: 'viajes',
    title: 'Viajes y Hotelería',
    description:
      'CAC +35% en 3 años, CLV +4.5%. Resolución de identidad, IA de recovery y la oportunidad oculta de la Gen Z.',
    icon: Plane,
    accent: '#0EA5E9',
    accentBg: 'rgba(14,165,233,0.08)',
  },
  {
    slug: 'gastronomia',
    title: 'Gastronomía y Restaurantes',
    description:
      'Churn del 45% en 2026. Restaurant Tech 2.0, relevancia predictiva y la batalla por la propiedad del cliente.',
    icon: UtensilsCrossed,
    accent: '#F97316',
    accentBg: 'rgba(249,115,22,0.08)',
  },
  {
    slug: 'indumentaria',
    title: 'Indumentaria y Moda',
    description:
      '16.9% de tasa de devolución. Lealtad como solución logística, omnicanalidad phygital y retail circular.',
    icon: Shirt,
    accent: '#EC4899',
    accentBg: 'rgba(236,72,153,0.08)',
  },
  {
    slug: 'combustibles',
    title: 'Combustibles y C-Stores',
    description:
      '81% compara precios, decisiones en <2 horas. Pump-to-store, personalización y el cliente no comprometido.',
    icon: Fuel,
    accent: '#F59E0B',
    accentBg: 'rgba(245,158,11,0.08)',
  },
  {
    slug: 'fintech',
    title: 'Fintech y Banca',
    description:
      '10% de clientes generan 90% de ganancias. Modelado de CLV, predicción de churn y reducción de fricción digital.',
    icon: Landmark,
    accent: '#10B981',
    accentBg: 'rgba(16,185,129,0.08)',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="bg-gradient-to-br from-[#EBE4FF] to-[#FFFFFF] border-b border-[#D7D6DB]">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-[#CBBAFC] text-[#2D1C5D] rounded-full text-sm font-medium mb-6">
              Qurable · Vertical Landings
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2F2E35] mb-5">
              Estrategias de fidelización
              <br />
              <span className="text-[#6430F7]">por industria</span>
            </h1>
            <p className="text-lg text-[#63626F] mb-2">
              Análisis multisectorial 2025–2026 con foco en CLV, retención y conversión.
            </p>
            <p className="text-sm text-[#91909D]">
              Seleccioná una industria para ver la landing completa.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(({ slug, title, description, icon: Icon, accent, accentBg }) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="group bg-[#FFFFFF] rounded-xl border border-[#D7D6DB] p-6 hover:border-[#6430F7] hover:shadow-lg transition-all flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: accentBg }}
              >
                <Icon className="w-6 h-6" style={{ color: accent }} />
              </div>
              <h3 className="text-lg font-semibold text-[#2F2E35] mb-2">{title}</h3>
              <p className="text-sm text-[#63626F] flex-1 mb-4">{description}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-[#6430F7] group-hover:gap-3 transition-all">
                Ver landing
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-6 bg-[#FAFAFA] border border-[#D7D6DB] rounded-xl text-center">
          <p className="text-sm text-[#63626F]">
            Cada landing es independiente y puede compartirse de forma directa con el equipo comercial de la vertical correspondiente.
          </p>
        </div>
      </div>
    </div>
  );
}
