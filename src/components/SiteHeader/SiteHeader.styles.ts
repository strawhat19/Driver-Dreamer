import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: { padding: 24, paddingTop: 16, backgroundColor: `#07162F`, gap: 22 },
    overlay: { backgroundColor: `transparent` },
    brand: { alignSelf: `flex-start` },
    logo: { width: 214, height: 56 },
    navigation: { gap: 18, flexWrap: `wrap`, flexDirection: `row`, alignItems: `center` },
    link: { gap: 7, flexDirection: `row`, alignItems: `center`, paddingVertical: 8 },
    pressed: { opacity: 0.65 },
    label: {
        color: `#FFFFFF`,
        fontSize: 13,
        fontWeight: `600`,
        fontFamily: Platform.OS === `ios` ? `Futura` : `sans-serif`,
    },
});
