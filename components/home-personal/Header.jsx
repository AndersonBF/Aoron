'use client';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Header() {
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    if (!headerRef.current || !imgRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(headerRef.current, { y: 200 }, { y: 0, duration: 1.2, ease: 'power3.out' }, '+=0.5');
    tl.fromTo(
      imgRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.4'
    );
    return () => tl.kill();
  }, []);

  return (
    <div
      ref={headerRef}
      className="header header-personal"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0000',
        backgroundImage: `
          radial-gradient(ellipse at 0% 100%, rgba(180, 40, 0, 0.85) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 0%, rgba(160, 35, 0, 0.75) 0%, transparent 45%),
          radial-gradient(ellipse at 20% 40%, rgba(120, 25, 0, 0.4) 0%, transparent 35%)
        `,
      }}
    >
      <img
        ref={imgRef}
        src="/aoron.png"
        alt="Aoron"
        style={{
          width: '70vw',
          maxWidth: '900px',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  );
}

export default Header;