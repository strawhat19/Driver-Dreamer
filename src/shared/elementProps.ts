import { Platform } from 'react-native';

export const elementProps = (className: string, id = className) => ({
    testID: id,
    nativeID: id,
    ...(Platform.OS === `web` ? { className } : {}),
});
