import './CollectionSection.scss';
import Icon from '../Icon/Icon';
import { Link } from 'expo-router';
import FeatureCard from '../FeatureCard/FeatureCard';

export function CollectionSection() {
  return (
    <section id={`collection-section`} className={`collection-section`} aria-labelledby={`collection-section-heading`}>
      <div id={`collection-section-intro`} className={`collection-section__intro`}>
        <p id={`collection-section-eyebrow`} className={`collection-section__eyebrow`}>
          {`YOUR PERSONAL COLLECTION`}
        </p>
        <h2 id={`collection-section-heading`} className={`collection-section__heading`}>
          <span id={`collection-section-heading-built`} className={`collection-section__heading-built`}>
            {`Built around`}
          </span>
          <span id={`collection-section-heading-dream`} className={`collection-section__heading-dream`}>
            {`your next dream.`}
          </span>
        </h2>
        <p id={`collection-section-description`} className={`collection-section__description`}>
          <span id={`collection-section-copy-first`} className={`collection-section__copy-line`}>
            {`Turn a passing obsession into a personal collection.`}
          </span>
          <span id={`collection-section-copy-second`} className={`collection-section__copy-line`}>
            {`Keep the cars you love close.`}
          </span>
        </p>
        <Link href={`/garage`} id={`collection-section-garage-link`} className={`collection-section__garage-link`}>
          <span id={`collection-section-garage-label`} className={`collection-section__garage-label`}>
            {`Build your garage`}
          </span>
          <Icon name={`arrow-right`} id={`collection-section-garage-icon`} />
        </Link>
      </div>
      <div id={`collection-section-features`} className={`collection-section__features`}>
        <FeatureCard
          number={`01`}
          icon={`search`}
          id={`discover`}
          label={`DISCOVER`}
          title={`Find your feeling.`}
          description={[`Explore luxury and sports cars.`, `Let one catch your imagination.`]}
        />
        <FeatureCard
          id={`save`}
          number={`02`}
          icon={`heart`}
          label={`SAVE`}
          title={`Make it yours.`}
          description={[`Give every favourite a home`, `in your own dream garage.`]}
        />
        <FeatureCard
          number={`03`}
          id={`compare`}
          icon={`compare`}
          label={`COMPARE`}
          title={`Look a little closer.`}
          description={[`Bring your favourites together.`, `See which one speaks to you.`]}
        />
      </div>
    </section>
  );
}

export default CollectionSection;
