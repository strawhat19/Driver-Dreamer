# Driver Dreamer

A simple Expo, React Native, and TypeScript landing page for web, iOS, and Android. The design follows the left concept in `assets/concepts/mockups/v6/04-full-page-comparison.svg`, with a header, hero, one collection section, and footer. Web styles use SCSS; native components use React Native styles. Typography uses system font fallbacks.

Install dependencies with `npm install`, then run `npm start`. Use `npm run web`, `npm run ios`, or `npm run android` for a specific platform. Native application identifiers are configured in `app.json`.

The shared garage context loads sample cars and stores saved car IDs locally. `useLocalStorage` in `src/shared/config.ts` defaults to `true`. Set it to `false` to load cars from `/api/cars`; for mobile, set `EXPO_PUBLIC_API_URL` to the deployed app’s HTTPS origin. The server API provides `/api` health information and `/api/cars` sample data. Web uses Expo’s server output for these routes.

About, Terms, Contact, Privacy, Journal, and Garage pages have internal routes. Common About, Contact, Privacy, and Terms aliases redirect to their canonical pages. Garage opens saved cars by default. Discover and Collections lead to `/garage?view=discover` to show all sample cars.

No dependencies were installed and no tests, builds, or verification were run, following `AGENTS.md`. No web or mobile export was generated.
