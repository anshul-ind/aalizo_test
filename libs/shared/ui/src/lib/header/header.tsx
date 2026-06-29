import styles from './header.module.css';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sections', href: '/sections' },
  { label: 'Business', href: '/business' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about-us' },
];

export interface HeaderProps {
  activePath?: string;
  navItems?: Array<{ label: string; href: string }>;
  userInitials?: string;
  variant?: 'public' | 'admin';
}

export function Header({
  activePath = '/',
  navItems: items = navItems,
  userInitials = 'A',
  variant = 'public',
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="aalizo home">
          aalizo
          {variant === 'admin' ? <span className={styles.badge}>admin</span> : <span className={styles.dot} />}
        </a>

        <nav className={styles.nav} aria-label="Primary navigation">
          {items.map((item) => {
            const isActive = activePath === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? styles.activeNavItem : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Open profile menu"
          className={styles.profileButton}
        >
          {userInitials}
        </button>
      </div>
    </header>
  );
}

export default Header;
