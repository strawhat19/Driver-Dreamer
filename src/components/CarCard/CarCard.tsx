import Icon from '../Icon/Icon';
import styles from './CarCard.styles';
import type { Car } from '../../shared/types';
import { elementProps } from '../../shared/elementProps';
import { Image, Pressable, Text, View } from 'react-native';

export type CarCardProps = {
    car: Car;
    saved: boolean;
    onToggleSaved: () => void;
};

export function CarCard({ car, saved, onToggleSaved }: CarCardProps) {
    return (
        <View
            {...elementProps(`car-card`, `car-card-${car.id}`)}
            style={styles.card}
        >
            {car.id === `ferrari-458-italia` ? (
                <Image
                    {...elementProps(`car-card-image`, `car-card-image-${car.id}`)}
                    style={styles.image}
                    resizeMode={`cover`}
                    accessibilityLabel={car.name}
                    source={require('../../../assets/concepts/mockups/v6/media/hero-ferrari-458.png')}
                />
            ) : (
                <View
                    {...elementProps(`car-card-placeholder`, `car-card-placeholder-${car.id}`)}
                    style={styles.placeholder}
                >
                    <Icon
                        size={44}
                        name={`garage`}
                        color={`#FFFFFF`}
                        id={`car-card-placeholder-icon-${car.id}`}
                        className={`car-card-placeholder-icon`}
                    />
                    <Text
                        {...elementProps(`car-card-placeholder-label`, `car-card-placeholder-label-${car.id}`)}
                        style={styles.placeholderLabel}
                    >
                        {`THE DREAM COLLECTION`}
                    </Text>
                </View>
            )}
            <Text
                {...elementProps(`car-card-collection`, `car-card-collection-${car.id}`)}
                style={styles.collection}
            >
                {car.collection.toUpperCase()}
            </Text>
            <Text
                {...elementProps(`car-card-name`, `car-card-name-${car.id}`)}
                style={styles.name}
            >
                {car.name}
            </Text>
            <Text
                {...elementProps(`car-card-colors`, `car-card-colors-${car.id}`)}
                style={styles.colors}
            >
                {car.colors}
            </Text>
            <Pressable
                {...elementProps(`car-card-save-button`, `car-card-save-button-${car.id}`)}
                onPress={onToggleSaved}
                accessibilityRole={`button`}
                accessibilityState={{ selected: saved }}
                accessibilityLabel={`${saved ? `Remove` : `Save`} ${car.name} ${saved ? `from` : `to`} my garage`}
                style={({ pressed }) => [styles.save, pressed && styles.pressed]}
            >
                <Icon
                    name={saved ? `check` : `heart`}
                    id={`car-card-save-icon-${car.id}`}
                    className={`car-card-save-icon`}
                />
                <Text
                    {...elementProps(`car-card-save-label`, `car-card-save-label-${car.id}`)}
                    style={styles.saveLabel}
                >
                    {saved ? `Remove from my garage` : `Save to my garage`}
                </Text>
            </Pressable>
        </View>
    );
}

export default CarCard;
