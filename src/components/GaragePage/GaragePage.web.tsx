import './GaragePage.scss';
import Head from 'expo-router/head';
import Icon from '../Icon/Icon';
import CarCard from '../CarCard/CarCard';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';
import { useGaragePage } from './useGaragePage.web';

export function GaragePage() {
  const {
    error, loading, savedCarIds, visibleCars, discovering,
    showSaved, showDiscover, toggleSavedCar,
  } = useGaragePage();

  return (
    <div id={`garage-page`} className={`garage-page`}>
      <Head>
        <title id={`garage-page-title`} className={`garage-page__document-title`}>
          {`${discovering ? `Discover` : `My Garage`} — Driver Dreamer`}
        </title>
      </Head>
      <SiteHeader />
      <main id={`garage-page-main`} className={`garage-page__main`}>
        <p id={`garage-page-eyebrow`} className={`garage-page__eyebrow`}>
          {`YOUR PERSONAL COLLECTION`}
        </p>
        <h1 id={`garage-page-heading`} className={`garage-page__heading`}>
          {discovering ? `Find your feeling.` : `Your dream garage.`}
        </h1>
        <div id={`garage-page-tabs`} className={`garage-page__tabs`} aria-label={`Collection view`}>
          <button
            type={`button`}
            onClick={showDiscover}
            aria-pressed={discovering}
            id={`garage-page-discover-tab`}
            className={`garage-page__tab`}
          >
            <Icon name={`compass`} id={`garage-page-discover-icon`} />
            <span id={`garage-page-discover-label`} className={`garage-page__tab-label`}>
              {`Discover`}
            </span>
          </button>
          <button
            type={`button`}
            onClick={showSaved}
            aria-pressed={!discovering}
            id={`garage-page-saved-tab`}
            className={`garage-page__tab`}
          >
            <Icon name={`garage`} id={`garage-page-saved-icon`} />
            <span id={`garage-page-saved-label`} className={`garage-page__tab-label`}>
              {`My Garage (${savedCarIds.length})`}
            </span>
          </button>
        </div>
        {error && (
          <p id={`garage-page-error`} className={`garage-page__error`} role={`alert`}>
            {error}
          </p>
        )}
        <div id={`garage-page-cars`} className={`garage-page__cars`} aria-busy={loading}>
          {loading ? (
            <CarCard loading />
          ) : visibleCars.map((car) => (
            <CarCard
              car={car}
              key={car.id}
              saved={savedCarIds.includes(car.id)}
              onToggleSaved={() => toggleSavedCar(car.id)}
            />
          ))}
        </div>
        {!loading && !error && visibleCars.length === 0 && (
          <div id={`garage-page-empty`} className={`garage-page__empty`}>
            <Icon size={36} name={`heart`} id={`garage-page-empty-icon`} />
            <p id={`garage-page-empty-copy`} className={`garage-page__empty-copy`}>
              {discovering ? `More dreams are on the way.` : `Save a car that stays with you. Your collection starts here.`}
            </p>
            {!discovering && (
              <button type={`button`} onClick={showDiscover} id={`garage-page-explore`} className={`garage-page__explore`}>
                <Icon name={`compass`} id={`garage-page-explore-icon`} />
                <span id={`garage-page-explore-label`} className={`garage-page__explore-label`}>
                  {`Explore cars`}
                </span>
              </button>
            )}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

export default GaragePage;
