import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GarageProvider } from '../context/GarageContext';

export default function AppLayout() {
  return (
    <GarageProvider>
      <StatusBar style={`dark`} />
      <Stack screenOptions={{ headerShown: false }} />
    </GarageProvider>
  );
}
