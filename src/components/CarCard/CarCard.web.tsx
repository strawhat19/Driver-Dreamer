import './CarCard.scss';
import Icon from '../Icon/Icon';
import type { Car } from '../../shared/types';

type CarCardProps = {
  car?: Car;
  saved?: boolean;
  loading?: boolean;
  onToggleSaved?: () => void;
};

const carPhoto = require(`../../../assets/concepts/mockups/v6/media/hero-ferrari-458.png`).uri;

export function CarCard({ car, saved = false, loading = false, onToggleSaved }: CarCardProps) {
  const id = car?.id ?? `loading`;

  return (
    <article id={`car-card-${id}`} className={`car-card`} aria-busy={loading}>
      {loading || !car ? (
        <div id={`car-card-skeleton-${id}`} className={`car-card__skeleton`} role={`status`} aria-label={`Loading car`}>
          <div id={`car-card-skeleton-photo-${id}`} className={`car-card__skeleton-photo skeleton`} />
          <div id={`car-card-skeleton-name-${id}`} className={`car-card__skeleton-name skeleton`} />
          <div id={`car-card-skeleton-copy-${id}`} className={`car-card__skeleton-copy skeleton`} />
        </div>
      ) : (
        <>
          <img src={carPhoto} alt={car.name} id={`car-card-photo-${id}`} className={`car-card__photo`} />
          <div id={`car-card-content-${id}`} className={`car-card__content`}>
            <p id={`car-card-index-${id}`} className={`car-card__index`}>
              {`COLLECTION / ${car.collection}`}
            </p>
            <h2 id={`car-card-name-${id}`} className={`car-card__name`}>
              {car.name}
            </h2>
            <p id={`car-card-colors-${id}`} className={`car-card__colors`}>
              {car.colors}
            </p>
            <button
              type={`button`}
              aria-pressed={saved}
              onClick={onToggleSaved}
              id={`car-card-save-${id}`}
              className={`car-card__save`}
            >
              <Icon name={saved ? `check` : `heart`} id={`car-card-save-icon-${id}`} />
              <span id={`car-card-save-label-${id}`} className={`car-card__save-label`}>
                {saved ? `Saved to your garage` : `Save this car`}
              </span>
            </button>
          </div>
        </>
      )}
    </article>
  );
}

export default CarCard;
