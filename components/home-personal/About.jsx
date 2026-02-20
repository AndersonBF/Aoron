'use client';

import React, { useEffect, useRef, useState } from 'react';

const principles = [
  {
    id: '01',
    title: 'COMPROMETIMENTO',
    description:
      'Desenvolver soluções inteligentes priorizando prazos com eficiência não é apenas o que fazemos — é quem somos como Aoron.',
  },
  {
    id: '02',
    title: 'PROPÓSITO',
    description:
      'Nosso trabalho exige vontade, convicção e paixão. Cada projeto conduzido, do início ao fim, representa nossa ambição de consolidar um legado sólido e memorável.',
  },
  {
    id: '03',
    title: 'EXPERIÊNCIA',
    description:
      'Consideramos nosso trabalho bem-sucedido quando ele impacta, emociona, resolve desafios e supera expectativas. A cada novo projeto, entregamos algo único, estratégico e personalizado.',
  },
];

function PrincipleCard({ principle, delay }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '48px 40px',
        background: hovered ? '#120a05' : '#0d0705',
        borderTop: hovered ? '2px solid #da5931' : '2px solid #1a1008',
        overflow: 'hidden',
        cursor: 'default',
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s, background 0.4s ease, border-color 0.4s ease`,
      }}
    >
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: '#da5931', marginBottom: 32,
      }} />

      <h3 style={{
        fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
        fontSize: 36,
        color: '#ffffff',
        letterSpacing: '0.06em',
        margin: '0 0 16px',
        lineHeight: 1,
      }}>
        {principle.title}
      </h3>

      <div style={{
        width: 32, height: 2,
        background: 'linear-gradient(90deg, #da5931, #fc8141)',
        marginBottom: 24,
      }} />

      <p style={{
        fontSize: 14,
        color: '#a0a0a0',
        lineHeight: 1.8,
        fontWeight: 300,
        position: 'relative',
        zIndex: 1,
        margin: 0,
        fontFamily: "'Segoe UI', sans-serif",
      }}>
        {principle.description}
      </p>

      <span style={{
        fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
        fontSize: 120,
        color: hovered ? 'rgba(218,89,49,0.1)' : 'rgba(218,89,49,0.05)',
        position: 'absolute',
        bottom: -20, right: -10,
        lineHeight: 1,
        pointerEvents: 'none',
        transition: 'color 0.4s ease',
        letterSpacing: '-0.02em',
        userSelect: 'none',
      }}>
        {principle.id}
      </span>
    </div>
  );
}

function About() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15 }
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
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      {/* Glow left */}
      <div style={{
        position: 'absolute', top: -200, left: -200,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,89,49,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Glow right */}
      <div style={{
        position: 'absolute', bottom: -150, right: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(252,129,65,0.08) 0%, transparent 70%)',
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
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            margin: '0 0 16px',
          }}>
            <span style={{ display: 'inline-block', width: 40, height: 1, background: '#da5931' }} />
            Diretrizes de Identidade
          </p>

          <h2 style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 'clamp(52px, 8vw, 96px)',
            color: '#ffffff',
            lineHeight: 0.9,
            letterSpacing: '0.02em',
            margin: '0 0 24px',
          }}>
            NOSSOS{' '}
            <span style={{
              background: 'linear-gradient(90deg, #da5931, #fc8141)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              PRINCÍPIOS
            </span>
          </h2>

          <p style={{
            fontSize: 16,
            color: '#a0a0a0',
            maxWidth: 480,
            margin: 0,
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            Diretrizes inegociáveis que asseguram consistência, qualidade e
            alinhamento estratégico em tudo o que realizamos.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 2,
        }}>
          {principles.map((p, i) => (
            <PrincipleCard key={p.id} principle={p} delay={0.2 + i * 0.15} />
          ))}
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop: 80,
          paddingTop: 32,
          borderTop: '1px solid #1a1008',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 22,
            letterSpacing: '0.2em',
            color: '#424242',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            Experiencie o{' '}
            <span style={{ color: '#da5931' }}>Excelente</span>
          </p>
          <p style={{
            fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
            fontSize: 18,
            color: '#424242',
            letterSpacing: '0.1em',
            margin: 0,
          }}>
            AORON · VIDEO & MARKETING
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;