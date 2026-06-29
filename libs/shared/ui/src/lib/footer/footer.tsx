// import styles from './footer.module.css';

// export function Footer() {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to Footer!</h1>
//     </div>
//   );
// }

// export default Footer;
const columns = [
  { title: 'Company', links: ['About us', 'Careers', 'Contact'] },
  { title: 'For businesses', links: ['List your business', 'Pricing', 'Business dashboard'] },
  { title: 'Legal', links: ['Privacy policy', 'Terms of service'] },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        <div>
          <span className="text-lg font-semibold text-gray-900">aalizo</span>
          <p className="mt-2 text-sm text-gray-500">Discover and book trusted local businesses.</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-medium text-gray-900">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-gray-400">
        © {new Date().getFullYear()} aalizo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
