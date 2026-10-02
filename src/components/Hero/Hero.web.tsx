import './Hero.scss';
import Icon from '../Icon/Icon';
import { Link } from 'expo-router';
import { useHero } from './useHero.web';

const heroPhoto = require(`../../../assets/concepts/mockups/v6/media/hero-ferrari-458.png`).uri;

export function Hero() {
  const { car, saved, error, loading, toggleSaved } = useHero();

  return (
    <section id={`hero`} className={`hero`} aria-labelledby={`hero-heading`}>
      <img
        src={heroPhoto}
        alt={`Red Ferrari 458 Italia with a tan interior on a racetrack beneath a blue sky`}
        id={`hero-ferrari-photo`}
        className={`hero__photo`}
      />
      <div id={`hero-content`} className={`hero__content`}>
        <p id={`hero-eyebrow`} className={`hero__eyebrow`}>
          {`THE DRIVER DREAMER COLLECTION`}
        </p>
        <h1 id={`hero-heading`} className={`hero__heading`}>
          <span id={`hero-heading-chase`} className={`hero__heading-chase`}>
            {`CHASE THE`}
          </span>
          <span id={`hero-heading-feeling`} className={`hero__heading-feeling`}>
            {`feeling.`}
          </span>
        </h1>
        <div id={`hero-invitation`} className={`hero__invitation`}>
          <p id={`hero-caption`} className={`hero__caption`}>
            {`FOR THE CARS THAT STAY WITH YOU`}
          </p>
          <p id={`hero-description`} className={`hero__description`}>
            <span id={`hero-description-first`} className={`hero__description-line`}>
              {`Long after the first look.`}
            </span>
            <span id={`hero-description-second`} className={`hero__description-line`}>
              {`Make a place for your next dream.`}
            </span>
          </p>
          <Link href={`/discover`} id={`hero-explore-link`} className={`hero__explore`}>
            <span id={`hero-explore-circle`} className={`hero__explore-circle`}>
              <Icon size={25} name={`arrow-right`} id={`hero-explore-icon`} />
            </span>
            <span id={`hero-explore-copy`} className={`hero__explore-copy`}>
              <strong id={`hero-explore-label`} className={`hero__explore-label`}>
                {`EXPLORE CARS`}
              </strong>
              <span id={`hero-explore-detail`} className={`hero__explore-detail`}>
                {`Find what moves you.`}
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div id={`hero-model-strip`} className={`hero__model-strip`} aria-busy={loading}>
        {loading ? (
          <div id={`hero-model-skeleton`} className={`hero__model-skeleton`} role={`status`} aria-label={`Loading featured car`}>
            <span id={`hero-skeleton-index`} className={`hero__skeleton-index skeleton`} />
            <span id={`hero-skeleton-name`} className={`hero__skeleton-name skeleton`} />
          </div>
        ) : car ? (
          <>
            <p id={`hero-model-index-${car.id}`} className={`hero__model-index`}>
              {`COLLECTION / ${car.collection}`}
            </p>
            <div id={`hero-model-details-${car.id}`} className={`hero__model-details`}>
              <h2 id={`hero-model-name-${car.id}`} className={`hero__model-name`}>
                {car.name}
              </h2>
              <p id={`hero-model-colors-${car.id}`} className={`hero__model-colors`}>
                {car.colors}
              </p>
            </div>
            <button
              type={`button`}
              aria-pressed={saved}
              onClick={toggleSaved}
              id={`hero-save-${car.id}`}
              className={`hero__save${saved ? ` hero__save--saved` : ``}`}
            >
              <Icon size={26} name={saved ? `check` : `heart`} id={`hero-save-icon-${car.id}`} />
              <span id={`hero-save-label-${car.id}`} className={`hero__save-label`}>
                {saved ? `SAVED TO GARAGE` : `SAVE THIS CAR`}
              </span>
            </button>
          </>
        ) : (
          <p id={`hero-model-error`} className={`hero__model-error`} role={`status`}>
            {error ?? `The collection is currently unavailable.`}
          </p>
        )}
        <Link href={`/collections`} id={`hero-collection-link`} className={`hero__collection-link`} aria-label={`View the collection`}>
          <Icon name={`arrow-right`} id={`hero-collection-icon`} />
        </Link>
      </div>
    </section>
  );
}

export default Hero;
