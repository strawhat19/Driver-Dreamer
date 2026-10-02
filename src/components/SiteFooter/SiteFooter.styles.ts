import { Platform, StyleSheet } from 'react-native';

const fontFamily = Platform.OS === `ios` ? `Futura` : `sans-serif`;

export default StyleSheet.create({
    footer: { gap: 20, padding: 24, paddingVertical: 34, backgroundColor: `#E32636` },
    brand: { alignSelf: `flex-start` },
    logo: { width: 232, height: 62 },
    tagline: { color: `#FFFFFF`, fontFamily, fontSize: 14, lineHeight: 22 },
    navigation: { gap: 20, flexWrap: `wrap`, flexDirection: `row` },
    link: { gap: 7, paddingVertical: 8, flexDirection: `row`, alignItems: `center` },
    label: { color: `#FFFFFF`, fontFamily, fontSize: 13 },
    divider: { height: 1, backgroundColor: `rgba(255,255,255,0.35)` },
    copyright: { gap: 6, flexWrap: `wrap`, flexDirection: `row`, alignItems: `center` },
    copyrightText: { color: `#FFFFFF`, fontFamily, fontSize: 11 },
    credit: { gap: 5, flexDirection: `row`, alignItems: `center` },
    creditLabel: { color: `#FFFFFF`, fontFamily, fontSize: 11, fontWeight: `700` },
    closing: { color: `#FFFFFF`, fontFamily, fontSize: 10, letterSpacing: 1.4 },
    pressed: { opacity: 0.65 },
});
