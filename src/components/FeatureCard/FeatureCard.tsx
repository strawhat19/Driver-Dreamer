import Icon from '../Icon/Icon';
import styles from './FeatureCard.styles';
import { Text, View } from 'react-native';
import type { IconName } from '../Icon/Icon.paths';
import { elementProps } from '../../shared/elementProps';

export type FeatureCardProps = {
    id: string;
    icon: IconName;
    label: string;
    title: string;
    number: string;
    description: string[];
};

export function FeatureCard({ id, icon, label, title, number, description }: FeatureCardProps) {
    return (
        <View
            {...elementProps(`feature-card`, `feature-card-${id}`)}
            style={styles.card}
        >
            <Text
                {...elementProps(`feature-card-index`, `feature-card-index-${id}`)}
                style={styles.index}
            >
                {`${number} / ${label}`}
            </Text>
            <Icon
                name={icon}
                size={34}
                id={`feature-card-icon-${id}`}
                className={`feature-card-icon`}
            />
            <Text
                {...elementProps(`feature-card-heading`, `feature-card-heading-${id}`)}
                style={styles.heading}
            >
                {title}
            </Text>
            <View
                {...elementProps(`feature-card-description`, `feature-card-description-${id}`)}
                style={styles.description}
            >
                {description.map((line, index) => (
                    <Text
                        {...elementProps(`feature-card-description-line`, `feature-card-description-${id}-${index}`)}
                        key={`${id}-${index}`}
                        style={styles.descriptionLine}
                    >
                        {line}
                    </Text>
                ))}
            </View>
        </View>
    );
}

export default FeatureCard;
