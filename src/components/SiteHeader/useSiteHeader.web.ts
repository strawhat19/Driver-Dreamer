import { useState } from 'react';
import { usePathname } from 'expo-router';

export function useSiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);
  const links = [
    { id: `discover`, label: `Discover`, icon: `compass`, href: `/discover` },
    { id: `collections`, label: `Collections`, icon: `layers`, href: `/collections` },
    { id: `journal`, label: `Journal`, icon: `book`, href: `/journal` },
    { id: `about`, label: `About`, icon: `info`, href: `/about` },
    { id: `garage`, label: `My Garage`, icon: `garage`, href: `/garage` },
  ] as const;

  const isActive = (href: string) => pathname === href || (pathname === `/` && href === `/discover`);

  return { links, isActive, menuOpen, closeMenu, toggleMenu };
}
