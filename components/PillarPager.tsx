
import React from 'react';
import { Icons } from './Icons';
import { PageView, NavigateFn } from '../types';

// Ordre des trois piliers pour la navigation horizontale (glisser / flèches).
export const PILLAR_ORDER: PageView[] = [
  PageView.MUSICIANS,
  PageView.HOST,
  PageView.LIVEJUKEBOX,
];

type Meta = { label: string; dot: string; text: string };

const META: Partial<Record<PageView, Meta>> = {
  [PageView.MUSICIANS]: { label: 'Les musiciens', dot: 'bg-neon-pink', text: 'text-neon-pink' },
  [PageView.HOST]: { label: 'Les hôtes', dot: 'bg-neon-blue', text: 'text-neon-blue' },
  [PageView.LIVEJUKEBOX]: { label: 'Live Jukebox', dot: 'bg-gradient-to-r from-neon-pink to-neon-blue', text: 'text-jam-100' },
};

// Pilier précédent / suivant (boucle sur les trois).
export const pillarNeighbours = (page: PageView) => {
  const i = PILLAR_ORDER.indexOf(page);
  if (i === -1) return null;
  const n = PILLAR_ORDER.length;
  return {
    prev: PILLAR_ORDER[(i - 1 + n) % n],
    next: PILLAR_ORDER[(i + 1) % n],
  };
};

interface PillarPagerProps {
  current: PageView;
  onNavigate: NavigateFn;
}

export const PillarPager: React.FC<PillarPagerProps> = ({ current, onNavigate }) => {
  const neighbours = pillarNeighbours(current);
  if (!neighbours) return null;
  const { prev, next } = neighbours;

  return (
    <section className="border-t border-jam-800 bg-jam-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-4">
          Découvrez les autres façons de vivre Vocal Jam
        </p>
        <div className="flex items-center justify-between gap-3">
          {/* Précédent */}
          <button
            onClick={() => onNavigate(prev)}
            className="group flex items-center gap-2 sm:gap-3 min-w-0 text-left"
            aria-label={`Aller vers ${META[prev]?.label}`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-jam-700 bg-jam-900 group-hover:border-neon-pink/50 group-hover:-translate-x-0.5 transition-all">
              <Icons.ArrowLeft className="w-5 h-5 text-gray-300" />
            </span>
            <span className="hidden sm:flex flex-col min-w-0">
              <span className="text-[11px] uppercase tracking-wide text-gray-500">Précédent</span>
              <span className={`font-semibold truncate ${META[prev]?.text}`}>{META[prev]?.label}</span>
            </span>
          </button>

          {/* Points de repère */}
          <div className="flex items-center gap-2 shrink-0">
            {PILLAR_ORDER.map((p) => {
              const active = p === current;
              return (
                <button
                  key={p}
                  onClick={() => !active && onNavigate(p)}
                  aria-label={META[p]?.label}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-full transition-all ${active ? `w-8 h-2.5 ${META[p]?.dot}` : 'w-2.5 h-2.5 bg-jam-700 hover:bg-jam-600'}`}
                />
              );
            })}
          </div>

          {/* Suivant */}
          <button
            onClick={() => onNavigate(next)}
            className="group flex items-center gap-2 sm:gap-3 min-w-0 text-right justify-end"
            aria-label={`Aller vers ${META[next]?.label}`}
          >
            <span className="hidden sm:flex flex-col min-w-0 items-end">
              <span className="text-[11px] uppercase tracking-wide text-gray-500">Suivant</span>
              <span className={`font-semibold truncate ${META[next]?.text}`}>{META[next]?.label}</span>
            </span>
            <span className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-jam-700 bg-jam-900 group-hover:border-neon-blue/50 group-hover:translate-x-0.5 transition-all">
              <Icons.ArrowRight className="w-5 h-5 text-gray-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
