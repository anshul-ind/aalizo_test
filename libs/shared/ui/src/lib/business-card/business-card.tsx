// import styles from './business-card.module.css';

// export function BusinessCard() {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to BusinessCard!</h1>
//     </div>
//   );
// }

// export default BusinessCard;
import type { Business } from '@aalizo/types';

export interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
      <img
        src={`https://picsum.photos/seed/${business.imageSeed}/480/320`}
        alt={business.name}
        loading="lazy"
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-gray-900">{business.name}</h3>
          <span className="flex items-center gap-1 text-sm text-gray-600">
            ★ {business.rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{business.category} · {business.location}</p>
      </div>
    </article>
  );
}

export default BusinessCard;
