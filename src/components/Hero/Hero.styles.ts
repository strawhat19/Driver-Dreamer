import { Platform, StyleSheet } from 'react-native';

const fontFamily = Platform.OS === `ios` ? `Futura` : `sans-serif`;

export default StyleSheet.create({
    hero: { minHeight: 820, backgroundColor: `#07162F` },
    content: { gap: 10, padding: 24, paddingTop: 22 },
    eyebrow: { color: `#07162F`, fontFamily, fontSize: 9, letterSpacing: 1.6 },
    heading: {
        color: `#FFFFFF`,
        fontSize: 45,
        lineHeight: 58,
        fontWeight: `700`,
        letterSpacing: -1.5,
        fontFamily: Platform.OS === `ios` ? `Avenir Next` : `sans-serif`,
    },
    script: {
        color: `#E32636`,
        fontSize: 76,
        lineHeight: 84,
        fontWeight: `700`,
        marginTop: -17,
        fontFamily: Platform.OS === `ios` ? `Snell Roundhand` : `cursive`,
    },
    caption: { marginTop: 14, color: `#FFFFFF`, fontFamily, fontSize: 9, letterSpacing: 1.4 },
    description: { color: `#FFFFFF`, fontFamily, fontSize: 15, lineHeight: 25 },
    explore: { gap: 14, marginTop: 16, flexDirection: `row`, alignItems: `center` },
    exploreCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: `#FFFFFF`, alignItems: `center`, justifyContent: `center` },
    exploreCopy: { gap: 4 },
    exploreLabel: { color: `#FFFFFF`, fontFamily, fontSize: 12, fontWeight: `700`, letterSpacing: 1 },
    exploreDetail: { color: `#FFFFFF`, fontFamily, fontSize: 10 },
    exploreAccent: { width: 24, height: 2, marginTop: 5, backgroundColor: `#E32636` },
    modelStrip: { gap: 12, padding: 24, marginTop: `auto`, backgroundColor: `rgba(7,22,47,0.8)` },
    index: { color: `#E32636`, fontFamily, fontSize: 10, fontWeight: `700`, letterSpacing: 1.4 },
    modelName: { color: `#FFFFFF`, fontFamily, fontSize: 25, fontWeight: `700` },
    colors: { color: `#FFFFFF`, fontFamily, fontSize: 8, letterSpacing: 0.9 },
    save: { gap: 10, marginTop: 6, paddingVertical: 8, alignSelf: `flex-start`, flexDirection: `row`, alignItems: `center` },
    saveLabel: { color: `#E32636`, fontFamily, fontSize: 10, fontWeight: `700`, letterSpacing: 1.1 },
    pressed: { opacity: 0.65 },
    disabled: { opacity: 0.5 },
});
