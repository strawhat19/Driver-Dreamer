import { Platform, StyleSheet } from 'react-native';

const fontFamily = Platform.OS === `ios` ? `Futura` : `sans-serif`;

export default StyleSheet.create({
    card: { flex: 1, minWidth: 230, gap: 18, paddingLeft: 20, borderLeftWidth: 1, borderLeftColor: `#E32636` },
    index: { color: `#E32636`, fontFamily, fontSize: 10, letterSpacing: 1.4 },
    heading: { color: `#07162F`, fontFamily, fontSize: 22, fontWeight: `700` },
    description: { gap: 4 },
    descriptionLine: { color: `#07162F`, fontFamily, fontSize: 13, lineHeight: 22 },
});
