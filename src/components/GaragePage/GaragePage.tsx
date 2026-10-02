import Icon from '../Icon/Icon';
import CarCard from '../CarCard/CarCard';
import styles from './GaragePage.styles';
import { useLocalSearchParams } from 'expo-router';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';
import { useEffect, useRef, useState } from 'react';
import { elementProps } from '../../shared/elementProps';
import { useGarage } from '../../shared/context/GarageContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated, Pressable, ScrollView, Text, View } from 'react-native';

export function GaragePage() {
    const { view } = useLocalSearchParams<{ view?: string }>();
    const pulse = useRef(new Animated.Value(0.45)).current;
    const [savedOnly, setSavedOnly] = useState(view !== `discover`);
    const { cars, loading, error, savedCarIds, toggleSavedCar } = useGarage();
    const visibleCars = savedOnly ? cars.filter(car => savedCarIds.includes(car.id)) : cars;

    useEffect(() => {
        setSavedOnly(view !== `discover`);
    }, [view]);

    useEffect(() => {
        if (!loading) return;

        const animation = Animated.loop(Animated.sequence([
            Animated.timing(pulse, { toValue: 0.95, duration: 850, useNativeDriver: true }),
            Animated.timing(pulse, { toValue: 0.45, duration: 850, useNativeDriver: true }),
        ]));

        animation.start();
        return () => animation.stop();
    }, [loading, pulse]);

    return (
        <SafeAreaView
            {...elementProps(`garage-page`)}
            style={styles.page}
            edges={[`top`, `bottom`]}
        >
            <ScrollView
                {...elementProps(`garage-page-scroll`)}
                style={styles.scroll}
            >
                <SiteHeader />
                <View
                    {...elementProps(`garage-page-content`)}
                    style={styles.content}
                >
                    <Text
                        {...elementProps(`garage-page-eyebrow`)}
                        style={styles.eyebrow}
                    >
                        {`YOUR PERSONAL COLLECTION`}
                    </Text>
                    <Text
                        {...elementProps(`garage-page-heading`)}
                        style={styles.heading}
                        accessibilityRole={`header`}
                    >
                        {savedOnly ? `Your dream garage.` : `Find your feeling.`}
                    </Text>
                    <Text
                        {...elementProps(`garage-page-description`)}
                        style={styles.description}
                    >
                        {`Keep the cars you love close. Explore the collection and save your favourites.`}
                    </Text>
                    <View
                        {...elementProps(`garage-page-tabs`)}
                        style={styles.tabs}
                    >
                        {[false, true].map(savedTab => {
                            const id = savedTab ? `saved` : `discover`;
                            const active = savedTab === savedOnly;

                            return (
                                <Pressable
                                    {...elementProps(`garage-page-tab`, `garage-page-tab-${id}`)}
                                    key={id}
                                    accessibilityRole={`tab`}
                                    onPress={() => setSavedOnly(savedTab)}
                                    accessibilityState={{ selected: active }}
                                    style={({ pressed }) => [styles.tab, active && styles.activeTab, pressed && styles.pressed]}
                                >
                                    <Icon
                                        size={19}
                                        name={savedTab ? `garage` : `compass`}
                                        id={`garage-page-tab-icon-${id}`}
                                        className={`garage-page-tab-icon`}
                                    />
                                    <Text
                                        {...elementProps(`garage-page-tab-label`, `garage-page-tab-label-${id}`)}
                                        style={[styles.tabLabel, active && styles.activeTabLabel]}
                                    >
                                        {savedTab ? `My Garage` : `Discover`}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                    {error ? (
                        <Text
                            {...elementProps(`garage-page-error`)}
                            style={styles.error}
                            accessibilityRole={`alert`}
                        >
                            {error}
                        </Text>
                    ) : null}
                    <View
                        {...elementProps(`garage-page-cars`)}
                        style={styles.cars}
                        accessibilityState={{ busy: loading }}
                    >
                        {loading ? [0, 1, 2].map(index => (
                            <Animated.View
                                {...elementProps(`garage-page-skeleton`, `garage-page-skeleton-${index}`)}
                                key={index}
                                accessibilityLabel={`Loading car`}
                                style={[styles.skeleton, { opacity: pulse }]}
                            >
                                <View
                                    {...elementProps(`garage-page-skeleton-image`, `garage-page-skeleton-image-${index}`)}
                                    style={styles.skeletonImage}
                                />
                                <View
                                    {...elementProps(`garage-page-skeleton-title`, `garage-page-skeleton-title-${index}`)}
                                    style={styles.skeletonTitle}
                                />
                                <View
                                    {...elementProps(`garage-page-skeleton-text`, `garage-page-skeleton-text-${index}`)}
                                    style={styles.skeletonText}
                                />
                            </Animated.View>
                        )) : visibleCars.map(car => (
                            <CarCard
                                car={car}
                                key={car.id}
                                saved={savedCarIds.includes(car.id)}
                                onToggleSaved={() => toggleSavedCar(car.id)}
                            />
                        ))}
                        {!loading && !error && visibleCars.length === 0 ? (
                            <View
                                {...elementProps(`garage-page-empty`)}
                                style={styles.empty}
                            >
                                <Icon
                                    size={36}
                                    name={`garage`}
                                    id={`garage-page-empty-icon`}
                                    className={`garage-page-empty-icon`}
                                />
                                <Text
                                    {...elementProps(`garage-page-empty-heading`)}
                                    style={styles.emptyHeading}
                                >
                                    {`Make room for a dream.`}
                                </Text>
                                <Text
                                    {...elementProps(`garage-page-empty-description`)}
                                    style={styles.emptyDescription}
                                >
                                    {`Choose Discover above and save a car to start your personal collection.`}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                </View>
                <SiteFooter />
            </ScrollView>
        </SafeAreaView>
    );
}

export default GaragePage;
