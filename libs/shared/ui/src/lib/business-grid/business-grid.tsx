import type { Business } from '@aalizo/types';
import { BusinessCard } from '../business-card/business-card';
import styles from './business-grid.module.css';

export interface BusinessGridProps {
  businesses: Business[];
}

export function BusinessGrid({ businesses }: BusinessGridProps) {
  if (businesses.length === 0) {
    return (
      <p className={styles.empty}>
        No businesses match your search yet.
      </p>
    );
  }

  return (
    <section className={styles.grid} aria-label="Business listings">
      {businesses.map((b) => (
        <BusinessCard key={b.id} business={b} />
      ))}
    </section>
  );
}

export default BusinessGrid;
