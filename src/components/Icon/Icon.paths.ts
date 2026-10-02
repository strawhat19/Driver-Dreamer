export type IconName =
    | 'x'
    | 'book'
    | 'info'
    | 'mail'
    | 'menu'
    | 'heart'
    | 'check'
    | 'layers'
    | 'garage'
    | 'search'
    | 'compare'
    | 'compass'
    | 'external'
    | 'arrow-right';

export const iconPaths: Record<IconName, string[]> = {
    x: [`M6 6l12 12M18 6 6 18`],
    menu: [`M4 6h16M4 12h16M4 18h16`],
    check: [`M5 12l4 4L19 6`],
    mail: [`M3 5h18v14H3z`, `m3 5 9 8 9-8`],
    info: [`M12 8v.01M12 11v6`, `M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20`],
    search: [`M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15`, `m16 16 5 5`],
    layers: [`m12 3 10 5-10 5L2 8z`, `m2 12 10 5 10-5M2 16l10 5 10-5`],
    compass: [`M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20`, `m16 8-3 5-5 3 3-5z`],
    garage: [`M3 21V8l9-5 9 5v13M6 21V11h12v10M6 14h12M6 17h12M6 20h12`],
    compare: [`M3 7h18m-5-4 5 4-5 4M21 17H3m5-4-5 4 5 4`],
    external: [`M14 3h7v7M21 3 10 14M10 3H3v18h18v-7`],
    'arrow-right': [`M3 12h18m-7-7 7 7-7 7`],
    book: [`M12 5v16M12 5C9 2 5 2 2 4v16c3-2 7-2 10 1 3-3 7-3 10-1V4c-3-2-7-2-10 1z`],
    heart: [`M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z`],
};
