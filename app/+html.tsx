import type { PropsWithChildren } from 'react';
import { ScrollViewStyleReset } from 'expo-router/html';

const favicon = require(`../assets/brand/logo-icon.png`).uri;

export default function Root({ children }: PropsWithChildren) {
  return (
    <html className={`driver-dreamer-document`} id={`driver-dreamer-document`} lang={`en`}>
      <head className={`driver-dreamer-head`} id={`driver-dreamer-head`}>
        <meta className={`driver-dreamer-charset`} id={`driver-dreamer-charset`} charSet={`utf-8`} />
        <meta
          className={`driver-dreamer-viewport`}
          id={`driver-dreamer-viewport`}
          name={`viewport`}
          content={`width=device-width, initial-scale=1`}
        />
        <title className={`driver-dreamer-title`} id={`driver-dreamer-title`}>
          {`Driver Dreamer — Your next obsession starts here.`}
        </title>
        <meta
          className={`driver-dreamer-description`}
          id={`driver-dreamer-description`}
          name={`description`}
          content={`Discover remarkable cars, explore thoughtful collections, and build your dream garage.`}
        />
        <link className={`driver-dreamer-favicon`} id={`driver-dreamer-favicon`} rel={`icon`} href={favicon} />
        <ScrollViewStyleReset />
      </head>
      <body className={`driver-dreamer-body`} id={`driver-dreamer-body`}>
        {children}
      </body>
    </html>
  );
}
