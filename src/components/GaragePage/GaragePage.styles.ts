import { Platform, StyleSheet } from 'react-native';

const fontFamily = Platform.OS === `ios` ? `Futura` : `sans-serif`;

export default StyleSheet.create({
    page: { flex: 1, backgroundColor: `#07162F` },
    scroll: { backgroundColor: `#FFFFFF` },
    content: { gap: 20, padding: 24, paddingVertical: 42 },
    eyebrow: { color: `#E32636`, fontFamily, fontSize: 10, letterSpacing: 1.4 },
    heading: { color: `#07162F`, fontFamily, fontSize: 34, fontWeight: `700` },
    description: { color: `#526079`, fontFamily, fontSize: 14, lineHeight: 24 },
    tabs: { gap: 22, flexWrap: `wrap`, flexDirection: `row`, marginVertical: 14 },
    tab: { gap: 8, flexDirection: `row`, alignItems: `center`, paddingVertical: 10, borderBottomWidth: 2, borderBottomColor: `transparent` },
    activeTab: { borderBottomColor: `#E32636` },
    tabLabel: { color: `#526079`, fontFamily, fontSize: 12 },
    activeTabLabel: { color: `#07162F`, fontWeight: `700` },
    cars: { gap: 12 },
    error: { color: `#B51C2A`, fontFamily, fontSize: 13, lineHeight: 22 },
    empty: { gap: 16, paddingVertical: 52, alignItems: `center` },
    emptyHeading: { color: `#07162F`, fontFamily, fontSize: 20, fontWeight: `700` },
    emptyDescription: { color: `#526079`, fontFamily, fontSize: 13, lineHeight: 22, textAlign: `center` },
    skeleton: { gap: 16, marginBottom: 32 },
    skeletonImage: { aspectRatio: 16 / 9, backgroundColor: `#E8EBF0` },
    skeletonTitle: { height: 26, width: `70%`, backgroundColor: `#E8EBF0` },
    skeletonText: { height: 12, width: `90%`, backgroundColor: `#E8EBF0` },
    pressed: { opacity: 0.65 },
});
