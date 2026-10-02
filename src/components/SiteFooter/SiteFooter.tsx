import Icon from '../Icon/Icon';
import styles from './SiteFooter.styles';
import { Link, type Href } from 'expo-router';
import type { IconName } from '../Icon/Icon.paths';
import { elementProps } from '../../shared/elementProps';
import { Image, Linking, Pressable, Text, View } from 'react-native';

const navigation: { path: string; label: string; icon: IconName }[] = [
    { path: `/about`, label: `About`, icon: `info` },
    { path: `/terms`, label: `Terms`, icon: `book` },
    { path: `/contact`, label: `Contact`, icon: `mail` },
    { path: `/privacy`, label: `Privacy`, icon: `check` },
];

export function SiteFooter() {
    return (
        <View
            {...elementProps(`site-footer`)}
            style={styles.footer}
        >
            <Link
                {...elementProps(`site-footer-home-link`)}
                asChild
                href={`/`}
            >
                <Pressable
                    {...elementProps(`site-footer-home-button`)}
                    accessibilityRole={`link`}
                    accessibilityLabel={`Driver Dreamer home`}
                    style={({ pressed }) => [styles.brand, pressed && styles.pressed]}
                >
                    <Image
                        {...elementProps(`site-footer-logo`)}
                        style={styles.logo}
                        resizeMode={`contain`}
                        source={require('../../../assets/concepts/mockups/v6/media/logo-on-red.png')}
                    />
                </Pressable>
            </Link>
            <Text
                {...elementProps(`site-footer-tagline`)}
                style={styles.tagline}
            >
                {`A home for the cars you dream about.`}
            </Text>
            <View
                {...elementProps(`site-footer-navigation`)}
                style={styles.navigation}
            >
                {navigation.map(({ path, label, icon }) => {
                    const id = path.slice(1);

                    return (
                        <Link
                            {...elementProps(`site-footer-navigation-link`, `site-footer-link-${id}`)}
                            asChild
                            key={id}
                            href={path as Href}
                        >
                            <Pressable
                                {...elementProps(`site-footer-navigation-button`, `site-footer-button-${id}`)}
                                accessibilityRole={`link`}
                                style={({ pressed }) => [styles.link, pressed && styles.pressed]}
                            >
                                <Icon
                                    name={icon}
                                    size={17}
                                    color={`#FFFFFF`}
                                    id={`site-footer-icon-${id}`}
                                    className={`site-footer-navigation-icon`}
                                />
                                <Text
                                    {...elementProps(`site-footer-navigation-label`, `site-footer-label-${id}`)}
                                    style={styles.label}
                                >
                                    {label}
                                </Text>
                            </Pressable>
                        </Link>
                    );
                })}
            </View>
            <View
                {...elementProps(`site-footer-divider`)}
                style={styles.divider}
            />
            <View
                {...elementProps(`site-footer-copyright`)}
                style={styles.copyright}
            >
                <Text
                    {...elementProps(`site-footer-copyright-text`)}
                    style={styles.copyrightText}
                >
                    {`© ${new Date().getFullYear()} Driver Dreamer. Built by`}
                </Text>
                <Pressable
                    {...elementProps(`site-footer-piratechs-link`)}
                    accessibilityRole={`link`}
                    onPress={() => Linking.openURL(`https://piratechs.com/`)}
                    style={({ pressed }) => [styles.credit, pressed && styles.pressed]}
                >
                    <Text
                        {...elementProps(`site-footer-piratechs-label`)}
                        style={styles.creditLabel}
                    >
                        {`Piratechs.`}
                    </Text>
                    <Icon
                        name={`external`}
                        size={12}
                        color={`#FFFFFF`}
                        id={`site-footer-piratechs-icon`}
                    />
                </Pressable>
            </View>
            <Text
                {...elementProps(`site-footer-closing-line`)}
                style={styles.closing}
            >
                {`KEEP THE DREAM ALIVE.`}
            </Text>
        </View>
    );
}

export default SiteFooter;
