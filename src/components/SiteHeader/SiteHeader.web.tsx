import './SiteHeader.scss';
import Icon from '../Icon/Icon';
import { Link } from 'expo-router';
import { useSiteHeader } from './useSiteHeader.web';

const darkLogo = require(`../../../assets/brand/logo.png`).uri;
const skyLogo = require(`../../../assets/concepts/mockups/v6/media/logo-on-sky-white.png`).uri;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const { links, isActive, menuOpen, closeMenu, toggleMenu } = useSiteHeader();

  return (
    <header
      id={`site-header`}
      className={`site-header${overlay ? ` site-header--overlay` : ``}`}
      onKeyDown={(event) => event.key === `Escape` && closeMenu()}
    >
      <Link
        href={`/`}
        onClick={closeMenu}
        id={`site-header-home`}
        className={`site-header__brand`}
        aria-label={`Driver Dreamer home`}
      >
        <img
          width={256}
          height={71}
          alt={`Driver Dreamer`}
          id={`site-header-logo`}
          src={overlay ? skyLogo : darkLogo}
          className={`site-header__logo`}
        />
      </Link>
      <button
        type={`button`}
        onClick={toggleMenu}
        id={`site-header-menu-toggle`}
        aria-expanded={menuOpen}
        aria-controls={`site-header-navigation`}
        className={`site-header__menu-toggle`}
        aria-label={menuOpen ? `Close menu` : `Open menu`}
      >
        <Icon name={menuOpen ? `x` : `menu`} id={`site-header-menu-icon`} />
      </button>
      <nav
        id={`site-header-navigation`}
        aria-label={`Main navigation`}
        className={`site-header__navigation${menuOpen ? ` site-header__navigation--open` : ``}`}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={closeMenu}
            id={`site-header-link-${link.id}`}
            aria-current={isActive(link.href) ? `page` : undefined}
            className={`site-header__link site-header__link--${link.id}`}
          >
            <Icon size={20} name={link.icon} id={`site-header-icon-${link.id}`} />
            <span id={`site-header-label-${link.id}`} className={`site-header__label`}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default SiteHeader;
