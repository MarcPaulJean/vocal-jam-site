import React from 'react';

// Logo Vocal Jam : une onde sonore / égaliseur (barres verticales arrondies en
// dégradé), reprise de la carte de visite. Rendu en SVG pour rester net à
// toutes les tailles. Dégradé rose → bleu néon, cohérent avec la charte.
const BAR_HEIGHTS = [9, 18, 30, 24, 14, 20, 28, 20, 11];

export const WaveLogo: React.FC<{ className?: string; title?: string }> = ({
  className,
  title = 'Vocal Jam',
}) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="vjWaveGrad" x1="0" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff0080" />
        <stop offset="1" stopColor="#00f0ff" />
      </linearGradient>
    </defs>
    {BAR_HEIGHTS.map((h, i) => {
      const x = 5 + i * 4.75;
      return (
        <rect
          key={i}
          x={x}
          y={24 - h / 2}
          width={3}
          height={h}
          rx={1.5}
          fill="url(#vjWaveGrad)"
        />
      );
    })}
  </svg>
);
