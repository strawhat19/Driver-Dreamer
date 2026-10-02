import { Platform, StyleSheet } from 'react-native';

const fontFamily = Platform.OS === `ios` ? `Futura` : `sans-serif`;

export default StyleSheet.create({
    section: { gap: 34, padding: 24, paddingVertical: 48, backgroundColor: `#FFFFFF` },
    introduction: { gap: 18 },
    eyebrow: { color: `#E32636`, fontFamily, fontSize: 9, letterSpacing: 1.5 },
    heading: { color: `#07162F`, fontFamily, fontSize: 33, fontWeight: `700`, letterSpacing: -0.8 },
    script: {
        color: `#E32636`,
        fontSize: 47,
        lineHeight: 59,
        marginTop: -20,
        fontWeight: `700`,
        fontFamily: Platform.OS === `ios` ? `Snell Roundhand` : `cursive`,
    },
    description: { color: `#07162F`, fontFamily, fontSize: 14, lineHeight: 25 },
    garage: { gap: 14, marginTop: 10, alignSelf: `flex-start`, flexDirection: `row`, alignItems: `center`, paddingVertical: 8 },
    garageLabel: { color: `#07162F`, fontFamily, fontSize: 13, fontWeight: `700` },
    features: { gap: 34, flexWrap: `wrap`, flexDirection: `row` },
    pressed: { opacity: 0.65 },
});
