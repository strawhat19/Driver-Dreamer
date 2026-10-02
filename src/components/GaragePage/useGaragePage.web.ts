import { useLocalSearchParams, useRouter } from 'expo-router';
import { useGarage } from '../../shared/context/GarageContext';

export function useGaragePage() {
  const router = useRouter();
  const { view } = useLocalSearchParams<{ view?: string }>();
  const { cars, loading, error, savedCarIds, toggleSavedCar } = useGarage();
  const discovering = view === `discover`;
  const visibleCars = discovering ? cars : cars.filter((car) => savedCarIds.includes(car.id));
  const showDiscover = () => router.setParams({ view: `discover` });
  const showSaved = () => router.setParams({ view: `saved` });

  return { error, loading, savedCarIds, visibleCars, discovering, showSaved, showDiscover, toggleSavedCar };
}
