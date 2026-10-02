import { useGarage } from '../../shared/context/GarageContext';

export function useHero() {
  const { cars, loading, error, savedCarIds, toggleSavedCar } = useGarage();
  const car = cars[0];
  const saved = car ? savedCarIds.includes(car.id) : false;
  const toggleSaved = () => car && toggleSavedCar(car.id);

  return { car, saved, error, loading, toggleSaved };
}
