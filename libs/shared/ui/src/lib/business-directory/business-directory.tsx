'use client';

import { useMemo, useState } from 'react';
import type { Business } from '@aalizo/types';
import { BusinessGrid } from '../business-grid/business-grid';
import { Footer } from '../footer/footer';
import { Header, type HeaderProps } from '../header/header';
import { HeroSection, type HeroSectionProps } from '../hero-section/hero-section';
import styles from './business-directory.module.css';

export interface BusinessDirectoryProps {
  businesses: Business[];
  header?: HeaderProps;
  hero?: Omit<HeroSectionProps, 'onSearch'>;
  showFooter?: boolean;
}

export function BusinessDirectory({
  businesses,
  header,
  hero,
  showFooter = true,
}: BusinessDirectoryProps) {
  const [search, setSearch] = useState('');

  const filteredBusinesses = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return businesses;
    }

    return businesses.filter((business) =>
      `${business.name} ${business.category} ${business.location}`
        .toLowerCase()
        .includes(query)
    );
  }, [businesses, search]);

  return (
    <main className={styles.page}>
      <Header {...header} />
      <HeroSection {...hero} onSearch={setSearch} />
      <BusinessGrid businesses={filteredBusinesses} />
      {showFooter ? <Footer /> : null}
    </main>
  );
}

export default BusinessDirectory;
