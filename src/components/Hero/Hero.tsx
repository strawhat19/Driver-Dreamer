import { Link } from 'expo-router';
import Icon from '../Icon/Icon';
import styles from './Hero.styles';
import SiteHeader from '../SiteHeader/SiteHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { elementProps } from '../../shared/elementProps';
import { useGarage } from '../../shared/context/GarageContext';
import { ImageBackground, Pressable, Text, View } from 'react-native';

const carId = `ferrari-458-italia`;

export function Hero() {
    const insets = useSafeAreaInsets();
    const { loading, savedCarIds, toggleSavedCar } = useGarage();
    const saved = savedCarIds.includes(carId);

    return (
        <ImageBackground
            {...elementProps(`hero`)}
            resizeMode={`cover`}
            style={[styles.hero, { paddingTop: insets.top }]}
            source={require('../../../assets/concepts/mockups/v6/media/hero-ferrari-458.png')}
        >
            <SiteHeader overlay />
            <View
                {...elementProps(`hero-content`)}
                style={styles.content}
            >
                <Text
                    {...elementProps(`hero-eyebrow`)}
                    style={styles.eyebrow}
                >
                    {`THE DRIVER DREAMER COLLECTION`}
                </Text>
                <Text
                    {...elementProps(`hero-heading`)}
                    style={styles.heading}
                    accessibilityRole={`header`}
                >
                    {`CHASE THE`}
                </Text>
                <Text
                    {...elementProps(`hero-heading-script`)}
                    style={styles.script}
                >
                    {`feeling.`}
                </Text>
                <Text
                    {...elementProps(`hero-caption`)}
                    style={styles.caption}
                >
                    {`FOR THE CARS THAT STAY WITH YOU`}
                </Text>
                <Text
                    {...elementProps(`hero-description`)}
                    style={styles.description}
                >
                    {`Long after the first look.\nMake a place for your next dream.`}
                </Text>
                <Link
                    {...elementProps(`hero-explore-link`)}
                    asChild
                    href={`/discover`}
                >
                    <Pressable
                        {...elementProps(`hero-explore-button`)}
                        accessibilityRole={`link`}
                        style={({ pressed }) => [styles.explore, pressed && styles.pressed]}
                    >
                        <View
                            {...elementProps(`hero-explore-circle`)}
                            style={styles.exploreCircle}
                        >
                            <Icon
                                name={`arrow-right`}
                                id={`hero-explore-icon`}
                                className={`hero-explore-icon`}
                            />
                        </View>
                        <View
                            {...elementProps(`hero-explore-copy`)}
                            style={styles.exploreCopy}
                        >
                            <Text
                                {...elementProps(`hero-explore-label`)}
                                style={styles.exploreLabel}
                            >
                                {`EXPLORE CARS`}
                            </Text>
                            <Text
                                {...elementProps(`hero-explore-detail`)}
                                style={styles.exploreDetail}
                            >
                                {`Find what moves you.`}
                            </Text>
                            <View
                                {...elementProps(`hero-explore-accent`)}
                                style={styles.exploreAccent}
                            />
                        </View>
                    </Pressable>
                </Link>
            </View>
            <View
                {...elementProps(`hero-model-strip`)}
                style={styles.modelStrip}
            >
                <Text
                    {...elementProps(`hero-model-index`)}
                    style={styles.index}
                >
                    {`COLLECTION / 01`}
                </Text>
                <Text
                    {...elementProps(`hero-model-name`)}
                    style={styles.modelName}
                >
                    {`Ferrari 458 Italia`}
                </Text>
                <Text
                    {...elementProps(`hero-model-colors`)}
                    style={styles.colors}
                >
                    {`RED EXTERIOR / TAN INTERIOR / SILVER WHEELS`}
                </Text>
                <Pressable
                    {...elementProps(`hero-save-car-button`)}
                    disabled={loading}
                    accessibilityRole={`button`}
                    accessibilityState={{ selected: saved, disabled: loading }}
                    onPress={() => toggleSavedCar(carId)}
                    style={({ pressed }) => [styles.save, loading && styles.disabled, pressed && styles.pressed]}
                >
                    <Icon
                        name={saved ? `check` : `heart`}
                        id={`hero-save-car-icon`}
                        className={`hero-save-car-icon`}
                    />
                    <Text
                        {...elementProps(`hero-save-car-label`)}
                        style={styles.saveLabel}
                    >
                        {saved ? `SAVED TO MY GARAGE` : `SAVE THIS CAR`}
                    </Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

export default Hero;
