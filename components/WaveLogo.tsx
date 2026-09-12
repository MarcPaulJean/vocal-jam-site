import React from 'react';

// Logo Vocal Jam : l'onde sonore / égaliseur, EXTRAITE du logo vectoriel officiel
// (fichier « Original.svg »), recolorée aux couleurs de la charte du site
// (dégradé rose -> bleu néon) au lieu du corail d'origine.
export const WaveLogo: React.FC<{ className?: string; title?: string }> = ({
  className,
  title = 'Vocal Jam',
}) => (
  <svg
    viewBox="20 25 160 149.67800903320312"
    className={className}
    role="img"
    aria-label={title}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="vjWaveGrad" x1="20" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ff0080" />
        <stop offset="1" stopColor="#00f0ff" />
      </linearGradient>
    </defs>
    <g clipRule="evenodd" fillRule="evenodd">
      <path d="M69.032 25a7.742 7.742 0 0 1 7.742 7.742v134.194a7.742 7.742 0 1 1-15.484 0V32.742A7.742 7.742 0 0 1 69.032 25zm20.645 12.903a7.742 7.742 0 0 1 7.742 7.742v108.387a7.742 7.742 0 1 1-15.484 0V45.645a7.742 7.742 0 0 1 7.742-7.742zm-41.29 10.323a7.742 7.742 0 0 1 7.742 7.742v87.742a7.742 7.742 0 1 1-15.484 0V55.968a7.742 7.742 0 0 1 7.742-7.742zm103.226 10.322a7.742 7.742 0 0 1 7.742 7.742v67.097a7.742 7.742 0 1 1-15.484 0V66.29a7.742 7.742 0 0 1 7.742-7.742zm-41.29 0a7.742 7.742 0 0 1 7.742 7.742v67.097a7.742 7.742 0 1 1-15.484 0V66.29a7.742 7.742 0 0 1 7.742-7.742zm20.645 12.904a7.742 7.742 0 0 1 7.742 7.742v41.29a7.742 7.742 0 1 1-15.484 0v-41.29a7.742 7.742 0 0 1 7.742-7.742zM27.742 79.194a7.742 7.742 0 0 1 7.742 7.742v23.226A7.742 7.742 0 1 1 20 110.161V86.935a7.742 7.742 0 0 1 7.742-7.741z" fill="url(#vjWaveGrad)" />
      <path d="M172.258 81.774A7.742 7.742 0 0 1 180 89.516v20.645a7.742 7.742 0 1 1-15.484 0V89.516a7.742 7.742 0 0 1 7.742-7.742z" fill="url(#vjWaveGrad)" />
      <path d="M151.613 58.548a7.742 7.742 0 0 1 7.742 7.742v67.097a7.742 7.742 0 1 1-15.484 0V66.29a7.742 7.742 0 0 1 7.742-7.742z" fill="url(#vjWaveGrad)" />
      <path d="M130.968 71.452a7.742 7.742 0 0 1 7.742 7.742v41.29a7.742 7.742 0 1 1-15.484 0v-41.29a7.742 7.742 0 0 1 7.742-7.742z" fill="url(#vjWaveGrad)" />
      <path d="M110.323 58.548a7.742 7.742 0 0 1 7.742 7.742v67.097a7.742 7.742 0 1 1-15.484 0V66.29a7.742 7.742 0 0 1 7.742-7.742z" fill="url(#vjWaveGrad)" />
      <path d="M89.677 37.903a7.742 7.742 0 0 1 7.742 7.742v108.387a7.742 7.742 0 1 1-15.484 0V45.645a7.742 7.742 0 0 1 7.742-7.742z" fill="url(#vjWaveGrad)" />
      <path d="M69.032 25a7.742 7.742 0 0 1 7.742 7.742v134.194a7.742 7.742 0 1 1-15.484 0V32.742A7.742 7.742 0 0 1 69.032 25z" fill="url(#vjWaveGrad)" />
      <path d="M48.387 48.226a7.742 7.742 0 0 1 7.742 7.742v87.742a7.742 7.742 0 1 1-15.484 0V55.968a7.742 7.742 0 0 1 7.742-7.742z" fill="url(#vjWaveGrad)" />
    </g>
  </svg>
);
