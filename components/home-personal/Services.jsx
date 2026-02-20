'use client';

import React, { useEffect, useRef, useState } from 'react';

const plans = [
  {
    id: '01',
    tag: 'BÁSICO',
    tagline: 'Para começar com força',
    price: 'R$250',
    period: '/mês',
    annualLabel: 'PLANO ANUAL — 20% OFF',
    annualPrice: 'R$2.400,00',
    items: [
      '3x Criativos semanais (inclui stories e datas comemorativas)',
      '1x Vídeo para redes sociais semanal (reels/shorts/TikTok)',
      '10x Fotos profissionais',
      'Tráfego pago (valor a ser definido mediante orçamento)',
    ],
    highlight: false,
  },
  {
    id: '02',
    tag: 'PADRÃO',
    tagline: 'IDEAL',
    price: 'R$400',
    period: '/mês',
    annualLabel: 'PLANO ANUAL — 25% OFF',
    annualPrice: 'R$3.600,00',
    items: [
      '5x Criativos semanais (inclui stories e datas comemorativas)',
      '1x Carrossel semanal',
      '3x Vídeos para redes sociais semanais (reels/shorts/TikTok)',
      '10x Fotos profissionais',
      'Gestão de branding',
      'Tráfego pago (valor a ser definido mediante orçamento)',
    ],
    highlight: true,
  },
  {
    id: '03',
    tag: 'PREMIUM',
    tagline: 'Presença total',
    price: 'R$700',
    period: '/mês',
    annualLabel: 'PLANO ANUAL — 30% OFF',
    annualPrice: 'R$5.880,00',
    items: [
      '10x Criativos semanais (inclui stories e datas comemorativas)',
      '3x Carrosséis semanais',
      '5x Vídeos para redes sociais semanais (reels/shorts/TikTok)',
      '20x Fotos profissionais',
      'Design para materiais impressos',
      'Gestão de branding',
      'Tráfego pago (valor a ser definido mediante orçamento)',
    ],
    highlight: false,
  },
];

function PlanCard({ plan, delay }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isHighlight = plan.highlight;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: isHighlight
          ? 'linear-gradient(145deg, #1a0c06, #0d0705)'
          : hovered ? '#120a05' : '#0d0705',
        border: isHighlight
          ? '1px solid rgba(218,89,49,0.5)'
          : hovered
          ? '1px solid rgba(218,89,49,0.25)'
          : '1px solid #1a1008',
        borderRadius: 2,
        padding: '48px 36px 40px',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0,
        transform: 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s, background 0.4s ease, border-color 0.4s ease`,
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: isHighlight ? 3 : hovered ? 3 : 0,
        background: 'linear-gradient(90deg, #da5931, #fc8141)',
        transition: 'height 0.3s ease',
      }} />

      {/* Glow blob for highlight */}
      {isHighlight && (
        <div style={{
          position: 'absolute',
          top: -80, right: -80,
          width: 240, height: 240,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(218,89,49,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Number */}
      <span style={{
        fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
        fontSize: 100,
        color: 'rgba(218,89,49,0.06)',
        position: 'absolute',
        bottom: -10, right: 16,
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.02em',
      }}>
        {plan.id}
      </span>

      {/* Tag */}
      <div style={{ marginBottom: 8 }}>
        <span style={{
          fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
          fontSize: 11,
          letterSpacing: '0.35em',
          color: '#da5931',
          textTransform: 'uppercase',
        }}>
          PLANO
        </span>
      </div>

      <h3 style={{
        fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
        fontSize: 48,
        color: '#ffffff',
        letterSpacing: '0.04em',
        margin: '0 0 4px',
        lineHeight: 1,
      }}>
        {plan.tag}
      </h3>

      <p style={{
        fontFamily: "'Segoe UI', sans-serif",
        fontSize: 12,
        color: '#a0a0a0',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        margin: '0 0 32px',
      }}>
        {plan.tagline}
      </p>

      {/* Divider */}
      <div style={{
        width: '100%', height: 1,
        background: 'linear-gradient(90deg, #da5931, transparent)',
        marginBottom: 32,
      }} />

      {/* Items */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', flex: 1 }}>
        {plan.items.map((item, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            marginBottom: 16,
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: 14,
            color: '#c0c0c0',
            lineHeight: 1.6,
            fontWeight: 300,
          }}>
            <span style={{
              color: '#da5931',
              fontSize: 16,
              marginTop: 2,
              flexShrink: 0,
              fontWeight: 700,
            }}>›</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Price block */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        borderRadius: 2,
        padding: '24px 24px 20px',
        border: '1px solid #1a1008',
      }}>
        <p style={{
          fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
          fontSize: 11,
          letterSpacing: '0.3em',
          color: '#da5931',
          margin: '0 0 4px',
          textTransform: 'uppercase',
        }}>
          PLANO MENSAL
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
          <span style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 52,
            color: '#ffffff',
            lineHeight: 1,
          }}>
            {plan.price}
          </span>
          <span style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: 14,
            color: '#a0a0a0',
            marginBottom: 8,
          }}>
            {plan.period}
          </span>
        </div>
        <p style={{
          fontFamily: "'Segoe UI', sans-serif",
          fontSize: 12,
          color: '#686868',
          margin: '0 0 20px',
          fontWeight: 300,
        }}>
          Pagamento recorrente no pix
        </p>

        <div style={{
          borderTop: '1px solid #1a1008',
          paddingTop: 16,
        }}>
          <p style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 11,
            letterSpacing: '0.25em',
            color: '#686868',
            margin: '0 0 4px',
          }}>
            {plan.annualLabel}
          </p>
          <p style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 28,
            color: '#da5931',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            {plan.annualPrice}
          </p>
          <p style={{
            fontFamily: "'Segoe UI', sans-serif",
            fontSize: 11,
            color: '#686868',
            margin: '4px 0 0',
            fontWeight: 300,
          }}>
            À vista no pix ou 12x no cartão
          </p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      background: '#080402',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,89,49,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            marginBottom: 80,
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          <p style={{
            fontSize: 12,
            letterSpacing: '0.4em',
            color: '#da5931',
            textTransform: 'uppercase',
            margin: '0 0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: "'Segoe UI', sans-serif",
          }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: '#da5931' }} />
            Proposta Comercial · Social Media
          </p>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{
              fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
              fontSize: 'clamp(48px, 7vw, 88px)',
              color: '#ffffff',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              margin: 0,
            }}>
              NOSSOS{' '}
              <span style={{
                background: 'linear-gradient(90deg, #da5931, #fc8141)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                PLANOS
              </span>
            </h2>
            <p style={{
              fontFamily: "'Segoe UI', sans-serif",
              fontSize: 14,
              color: '#686868',
              maxWidth: 320,
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 300,
            }}>
              Escolha o plano ideal para o seu negócio e experiencie o excelente em cada entrega.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} delay={0.2 + i * 0.15} />
          ))}
        </div>

        {/* Bottom note */}
        <div style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: '1px solid #1a1008',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          fontFamily: "'Segoe UI', sans-serif",
        }}>
          <p style={{
            fontSize: 13,
            color: '#686868',
            margin: 0,
            fontWeight: 300,
          }}>
            Planos personalizados disponíveis mediante consulta.
          </p>
          <p style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 18,
            color: '#424242',
            letterSpacing: '0.15em',
            margin: 0,
          }}>
            AORON · VIDEO & MARKETING
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;