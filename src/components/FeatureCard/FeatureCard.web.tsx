import './FeatureCard.scss';
import Icon from '../Icon/Icon';
import type { IconName } from '../Icon/Icon.paths';

type FeatureCardProps = {
  id: string;
  icon: IconName;
  title: string;
  label: string;
  number: string;
  description: string[];
};

export function FeatureCard({ id, icon, title, label, number, description }: FeatureCardProps) {
  return (
    <article id={`feature-card-${id}`} className={`feature-card`}>
      <p id={`feature-card-index-${id}`} className={`feature-card__index`}>
        {`${number} / ${label}`}
      </p>
      <Icon size={34} name={icon} id={`feature-card-icon-${id}`} className={`feature-card__icon`} />
      <h3 id={`feature-card-title-${id}`} className={`feature-card__title`}>
        {title}
      </h3>
      <p id={`feature-card-description-${id}`} className={`feature-card__description`}>
        {description.map((line, index) => (
          <span key={index} id={`feature-card-line-${id}-${index}`} className={`feature-card__line`}>
            {line}
          </span>
        ))}
      </p>
    </article>
  );
}

export default FeatureCard;
