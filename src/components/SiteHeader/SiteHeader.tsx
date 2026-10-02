import Icon from '../Icon/Icon';
import styles from './SiteHeader.styles';
import { Link, type Href } from 'expo-router';
import type { IconName } from '../Icon/Icon.paths';
import { elementProps } from '../../shared/elementProps';
import { Image, Pressable, Text, View } from 'react-native';

const navigation: { path: string; label: string; icon: IconName }[] = [
    { path: `/discover`, label: `Discover`, icon: `compass` },
    { path: `/collections`, label: `Collections`, icon: `layers` },
    { path: `/journal`, label: `Journal`, icon: `book` },
    { path: `/about`, label: `About`, icon: `info` },
    { path: `/garage`, label: `My Garage`, icon: `garage` },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
    return (
        <View
            {...elementProps(`site-header`)}
            style={[styles.header, overlay && styles.overlay]}
        >
            <Link
                {...elementProps(`site-header-home-link`)}
                asChild
                href={`/`}
            >
                <Pressable
                    {...elementProps(`site-header-home-button`)}
                    accessibilityRole={`link`}
                    accessibilityLabel={`Driver Dreamer home`}
                    style={({ pressed }) => [styles.brand, pressed && styles.pressed]}
                >
                    <Image
                        {...elementProps(`site-header-logo`)}
                        style={styles.logo}
                        resizeMode={`contain`}
                        source={require('../../../assets/concepts/mockups/v6/media/logo-on-sky-white.png')}
                    />
                </Pressable>
            </Link>
            <View
                {...elementProps(`site-header-navigation`)}
                style={styles.navigation}
            >
                {navigation.map(({ path, label, icon }) => {
                    const id = path.slice(1);

                    return (
                        <Link
                            {...elementProps(`site-header-navigation-link`, `site-header-link-${id}`)}
                            asChild
                            key={id}
                            href={path as Href}
                        >
                            <Pressable
                                {...elementProps(`site-header-navigation-button`, `site-header-button-${id}`)}
                                accessibilityRole={`link`}
                                style={({ pressed }) => [styles.link, pressed && styles.pressed]}
                            >
                                <Icon
                                    name={icon}
                                    size={19}
                                    color={`#FFFFFF`}
                                    id={`site-header-icon-${id}`}
                                    className={`site-header-navigation-icon`}
                                />
                                <Text
                                    {...elementProps(`site-header-navigation-label`, `site-header-label-${id}`)}
                                    style={styles.label}
                                >
                                    {label}
                                </Text>
                            </Pressable>
                        </Link>
                    );
                })}
            </View>
        </View>
    );
}

export default SiteHeader;
