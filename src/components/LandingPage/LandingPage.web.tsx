import './LandingPage.scss';
import Head from 'expo-router/head';
import Hero from '../Hero/Hero';
import SiteFooter from '../SiteFooter/SiteFooter';
import SiteHeader from '../SiteHeader/SiteHeader';
import CollectionSection from '../CollectionSection/CollectionSection';

export function LandingPage() {
  return (
    <div id={`landing-page`} className={`landing-page`}>
      <Head>
        <title id={`landing-page-title`} className={`landing-page__title`}>
          {`Driver Dreamer — Chase the feeling.`}
        </title>
        <meta
          name={`description`}
          id={`landing-page-description`}
          className={`landing-page__description`}
          content={`A home for the cars you dream about. Discover your next dream and build your personal garage.`}
        />
      </Head>
      <a href={`#landing-page-main`} id={`landing-page-skip-link`} className={`landing-page__skip-link`}>
        {`Skip to content`}
      </a>
      <div id={`landing-page-hero-shell`} className={`landing-page__hero-shell`}>
        <SiteHeader overlay />
        <main id={`landing-page-main`} className={`landing-page__main`}>
          <Hero />
          <CollectionSection />
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}

export default LandingPage;
