import { Link } from 'expo-router';
import Icon from '../Icon/Icon';
import styles from './CollectionSection.styles';
import FeatureCard from '../FeatureCard/FeatureCard';
import { elementProps } from '../../shared/elementProps';
import { Pressable, Text, View } from 'react-native';

export function CollectionSection() {
    return (
        <View
            {...elementProps(`collection-section`)}
            style={styles.section}
        >
            <View
                {...elementProps(`collection-section-introduction`)}
                style={styles.introduction}
            >
                <Text
                    {...elementProps(`collection-section-eyebrow`)}
                    style={styles.eyebrow}
                >
                    {`YOUR PERSONAL COLLECTION`}
                </Text>
                <Text
                    {...elementProps(`collection-section-heading`)}
                    style={styles.heading}
                    accessibilityRole={`header`}
                >
                    {`Built around`}
                </Text>
                <Text
                    {...elementProps(`collection-section-heading-script`)}
                    style={styles.script}
                >
                    {`your next dream.`}
                </Text>
                <Text
                    {...elementProps(`collection-section-description`)}
                    style={styles.description}
                >
                    {`Turn a passing obsession into a personal collection.\nKeep the cars you love close.`}
                </Text>
                <Link
                    {...elementProps(`collection-section-garage-link`)}
                    asChild
                    href={`/garage`}
                >
                    <Pressable
                        {...elementProps(`collection-section-garage-button`)}
                        accessibilityRole={`link`}
                        style={({ pressed }) => [styles.garage, pressed && styles.pressed]}
                    >
                        <Text
                            {...elementProps(`collection-section-garage-label`)}
                            style={styles.garageLabel}
                        >
                            {`Build your garage`}
                        </Text>
                        <Icon
                            name={`arrow-right`}
                            id={`collection-section-garage-icon`}
                            className={`collection-section-garage-icon`}
                        />
                    </Pressable>
                </Link>
            </View>
            <View
                {...elementProps(`collection-section-features`)}
                style={styles.features}
            >
                <FeatureCard
                    id={`discover`}
                    number={`01`}
                    icon={`search`}
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
                    id={`compare`}
                    number={`03`}
                    icon={`compare`}
                    label={`COMPARE`}
                    title={`Look a little closer.`}
                    description={[`Bring your favourites together.`, `See which one speaks to you.`]}
                />
            </View>
        </View>
    );
}

export default CollectionSection;
