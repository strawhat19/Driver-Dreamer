import { Platform, StyleSheet } from 'react-native';

const fontFamily = Platform.OS === `ios` ? `Futura` : `sans-serif`;

export default StyleSheet.create({
    card: { gap: 16, marginBottom: 22, borderBottomWidth: 1, borderBottomColor: `#E6E8ED`, paddingBottom: 24 },
    image: { width: `100%`, aspectRatio: 16 / 9, backgroundColor: `#07162F` },
    placeholder: { gap: 14, aspectRatio: 16 / 9, backgroundColor: `#07162F`, alignItems: `center`, justifyContent: `center` },
    placeholderLabel: { color: `#FFFFFF`, fontFamily, fontSize: 11, letterSpacing: 1.2 },
    collection: { color: `#E32636`, fontFamily, fontSize: 10, letterSpacing: 1.2 },
    name: { color: `#07162F`, fontFamily, fontSize: 25, fontWeight: `700` },
    colors: { color: `#526079`, fontFamily, fontSize: 11, lineHeight: 19 },
    save: { gap: 9, paddingVertical: 10, flexDirection: `row`, alignItems: `center`, alignSelf: `flex-start` },
    saveLabel: { color: `#07162F`, fontFamily, fontSize: 12, fontWeight: `700` },
    pressed: { opacity: 0.65 },
});
