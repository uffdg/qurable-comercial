import { Link } from 'react-router';
import { Plane, UtensilsCrossed, Shirt, Fuel, Landmark, ArrowRight } from 'lucide-react';

const industries = [
  {
    slug: 'viajes',
    title: 'Viajes y Hotelería',
    description:
      'La diferencia ya no está solo en la tarifa o la habitación. Está en la relación: experiencias personalizadas que impulsan preferencia y recompra.',
    icon: Plane,
    accent: '#7C42F8',
    accentBg: 'linear-gradient(160deg, #A06FFF 0%, #7C42F8 48%, #6430F7 100%)',
  },
  {
    slug: 'gastronomia',
    title: 'Gastronomía y Restaurantes',
    description:
      'Del cliente que compra una vez al que vuelve siempre. Identificar, entender y activar la recompra con inteligencia.',
    icon: UtensilsCrossed,
    accent: '#00AFC4',
    accentBg: 'linear-gradient(160deg, #13C8D7 0%, #00AFC4 48%, #008EA4 100%)',
  },
  {
    slug: 'indumentaria',
    title: 'Indumentaria y Moda',
    description:
      '16.9% de tasa de devolución. Lealtad como solución logística, omnicanalidad phygital y retail circular.',
    icon: Shirt,
    accent: '#EC4899',
    accentBg: 'linear-gradient(160deg, #F472B6 0%, #EC4899 48%, #BE185D 100%)',
  },
  {
    slug: 'combustibles',
    title: 'Combustibles y C-Stores',
    description:
      '81% compara precios, decisiones en <2 horas. Pump-to-store, personalización y el cliente no comprometido.',
    icon: Fuel,
    accent: '#F97316',
    accentBg: 'linear-gradient(160deg, #FF7A1A 0%, #F97316 48%, #EA580C 100%)',
  },
  {
    slug: 'fintech',
    title: 'Fintech y Banca',
    description:
      'Del cliente que tiene la cuenta al que tiene el hábito. Cada transacción financiera como evento de engagement.',
    icon: Landmark,
    accent: '#0D0C14',
    accentBg: 'linear-gradient(160deg, #2F2E35 0%, #18171C 50%, #0D0C14 100%)',
  },
];

export default function Home() {
  return (
    <div className="q-page min-h-screen">
      <div
        className="q-hero relative overflow-hidden border-b border-white/10"
        style={{
          background:
            'radial-gradient(circle at 70% 20%, rgba(100,48,247,0.36), transparent 35%), radial-gradient(circle at 15% 80%, rgba(67,32,165,0.28), transparent 34%), #0D0C14',
        }}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white/45 border border-white/10 rounded-full text-xs font-semibold tracking-[0.08em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6430F7]" />
              Qurable · Loyalty · Datos · Engagement · Pagos
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl">
              De primer guiño a cliente de por vida.
            </h1>
            <p className="text-lg md:text-xl text-white/65 mb-8 max-w-2xl">
              Qurable conecta loyalty, datos, engagement y pagos para ayudar a las marcas a vender
              más, retener mejor y activar relaciones en tiempo real, todo orquestado por IA.
            </p>
            <Link
              to="/viajes"
              className="q-brand-button inline-flex items-center gap-2 px-7 py-3 text-white font-semibold"
            >
              Explorar landings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-16">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6430F7] mb-2">
              Casos de uso
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2F2E35] max-w-3xl">
              Desafíos similares, diversas industrias, el poder de una plataforma.
            </h2>
          </div>
          <p className="text-sm text-[#63626F] max-w-sm">
            Cada landing conserva su foco comercial y sus features propios, pero habla desde el
            mismo sistema: datos, engagement, loyalty y pagos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ slug, title, description, icon: Icon, accentBg }, index) => (
            <Link
              key={slug}
              to={`/${slug}`}
              className="q-home-card group min-h-[430px] rounded-[28px] p-7 md:p-8 transition-all flex flex-col"
              style={{ background: accentBg }}
            >
              <div className="relative z-10 flex items-center justify-between gap-4 mb-9">
                <div className="flex items-center gap-3 text-xs font-bold tracking-[0.12em] uppercase text-white/78">
                  <span className="h-px w-8 bg-white/70" />
                  Vertical comercial
                </div>
                <Icon className="w-5 h-5 text-white/70" />
              </div>
              <div className="q-home-card-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="relative z-10 text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {title}
              </h3>
              <p className="relative z-10 text-base leading-relaxed text-white/68 flex-1 mb-8">
                {description}
              </p>
              <CardMisc index={index} />
              <div className="relative z-10 mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-white/28 bg-white/16 px-6 py-3 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-all group-hover:gap-4 group-hover:bg-white/22">
                Ver landing
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 q-solution rounded-[28px] border border-[#D7D6DB]/70 p-8 md:p-10">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6430F7] mb-3">
            Sistema comercial
          </p>
          <p className="text-2xl md:text-4xl font-bold text-[#2F2E35] max-w-4xl">
            Conexiones reales con clientes, en tiempo real: lo que pasa en tienda, WhatsApp,
            redes, e-commerce y pagos se unifica en una sola capa de inteligencia.
          </p>
        </div>
      </div>
    </div>
  );
}

function CardMisc({ index }: { index: number }) {
  const variants = [
    <path key="a" d="M10 105 C80 34 150 152 230 64 S360 72 430 22" />,
    <path key="b" d="M14 82 C86 120 112 4 190 54 S292 118 430 30" />,
    <path key="c" d="M8 118 L92 82 L154 102 L238 48 L316 70 L430 18" />,
  ];

  return (
    <svg
      className="q-home-card-misc"
      viewBox="0 0 440 150"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2">
        {variants[index % variants.length]}
      </g>
      <g fill="currentColor">
        <circle cx="12" cy="105" r="4" />
        <circle cx="118" cy="74" r="5" />
        <circle cx="256" cy="58" r="7" />
        <circle cx="432" cy="22" r="4" />
      </g>
      <g stroke="currentColor" strokeDasharray="5 10" strokeWidth="1" opacity="0.28">
        <path d="M250 46 H430" />
        <path d="M250 88 H430" />
        <path d="M250 130 H430" />
      </g>
    </svg>
  );
}
