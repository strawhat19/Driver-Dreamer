import './SiteFooter.scss';
import Icon from '../Icon/Icon';
import { Link } from 'expo-router';

const logo = require(`../../../assets/concepts/mockups/v6/media/logo-on-red.png`).uri;
const links = [
  { id: `about`, label: `About`, icon: `info`, href: `/about` },
  { id: `terms`, label: `Terms`, icon: `book`, href: `/terms` },
  { id: `contact`, label: `Contact`, icon: `mail`, href: `/contact` },
  { id: `privacy`, label: `Privacy`, icon: `info`, href: `/privacy` },
] as const;

export function SiteFooter() {
  return (
    <footer id={`site-footer`} className={`site-footer`}>
      <div id={`site-footer-main`} className={`site-footer__main`}>
        <div id={`site-footer-brand`} className={`site-footer__brand`}>
          <Link href={`/`} id={`site-footer-home`} className={`site-footer__home`}>
            <img
              src={logo}
              width={256}
              height={71}
              alt={`Driver Dreamer`}
              id={`site-footer-logo`}
              className={`site-footer__logo`}
            />
          </Link>
          <p id={`site-footer-tagline`} className={`site-footer__tagline`}>
            {`A home for the cars you dream about.`}
          </p>
        </div>
        <nav id={`site-footer-navigation`} aria-label={`Footer navigation`} className={`site-footer__navigation`}>
          {links.map((link) => (
            <Link key={link.id} href={link.href} id={`site-footer-link-${link.id}`} className={`site-footer__link`}>
              <Icon size={15} name={link.icon} id={`site-footer-icon-${link.id}`} />
              <span id={`site-footer-label-${link.id}`} className={`site-footer__label`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      <div id={`site-footer-bottom`} className={`site-footer__bottom`}>
        <p id={`site-footer-copyright`} className={`site-footer__copyright`}>
          {`© ${new Date().getFullYear()} Driver Dreamer. Built by `}
          <a href={`https://piratechs.com/`} id={`site-footer-piratechs`} className={`site-footer__piratechs`}>
            {`Piratechs.`}
          </a>
        </p>
        <p id={`site-footer-closing`} className={`site-footer__closing`}>
          {`KEEP THE DREAM ALIVE.`}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
