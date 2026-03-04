'use client';

import React, { useEffect, useRef } from 'react';

function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(60px)';
    el.style.transition = 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: '#080402',
        padding: '140px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1a1008',
      }}
    >
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
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <div ref={sectionRef}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: '0.4em',
              color: '#da5931',
              textTransform: 'uppercase',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 40,
                height: 1,
                background: '#da5931',
              }}
            />
            Sobre Nós
          </p>

          <h2
            style={{
              fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
              fontSize: 'clamp(60px, 9vw, 110px)',
              color: '#ffffff',
              lineHeight: 0.9,
              letterSpacing: '0.02em',
              margin: '0 0 40px',
            }}
          >
            IDENTIDADE &{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #da5931, #fc8141)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              VISÃO
            </span>
          </h2>

          <p
            style={{
              fontSize: 18,
              color: '#a0a0a0',
              maxWidth: 720,
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 40,
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Nossa atuação é construída sobre estratégia, precisão e propósito.
            Cada projeto nasce da combinação entre análise técnica e visão
            criativa. Não entregamos apenas soluções — entregamos posicionamento e
            impacto.
          </p>

          <p
            style={{
              fontSize: 18,
              color: '#a0a0a0',
              maxWidth: 720,
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: 60,
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            Acreditamos que excelência não é diferencial, é padrão. Nosso compromisso
            está na construção de experiências digitais sólidas, funcionais e
            memoráveis.
          </p>

          <div
            style={{
              borderTop: '1px solid #1a1008',
              paddingTop: 32,
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}
          >
            <p
              style={{
                fontFamily: '"Bebas Neue", "Arial Black", sans-serif',
                fontSize: 22,
                letterSpacing: '0.2em',
                color: '#424242',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Construindo com{' '}
              <span style={{ color: '#da5931' }}>Excelência</span>
            </p>

            <p
              style={{
                fontFamily: '"Bebas Neue", "Arial Black", "sans-serif"',
                fontSize: 18,
                color: '#424242',
                letterSpacing: '0.1em',
                margin: 0,
              }}
            >
              {/*SEU NOME · DESENVOLVEDOR*/}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;