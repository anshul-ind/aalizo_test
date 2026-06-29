'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import styles from './hero-section.module.css';

export interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  variant?: 'public' | 'admin';
}

export function HeroSection({
  eyebrow,
  title = 'Find trusted businesses near you',
  description = 'Search listings, compare ratings, and book a service in your neighborhood.',
  placeholder = 'Search businesses or services nearby...',
  onSearch,
  variant = 'public',
}: HeroSectionProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <section className={variant === 'admin' ? styles.adminHero : styles.hero}>
      <div>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.search}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder={placeholder}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default HeroSection;
