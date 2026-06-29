'use client';

import { BusinessDirectory } from '@aalizo/shared-ui';
import type { Business } from '@aalizo/types';

const mockBusinesses: Business[] = [
  { id: '1', name: 'Brew & Co', category: 'Cafe', rating: 4.7, location: 'Indore', imageSeed: 'brew1' },
  { id: '2', name: 'FixIt Electricians', category: 'Home services', rating: 4.5, location: 'Bhopal', imageSeed: 'fixit2' },
  { id: '3', name: 'GreenLeaf Salon', category: 'Wellness', rating: 4.8, location: 'Indore', imageSeed: 'salon3' },
];

export default function HomePage() {
  return <BusinessDirectory businesses={mockBusinesses} />;
}
