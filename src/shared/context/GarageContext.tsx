import type { Car } from '../types';
import { getCars } from '../api/client';
import type { PropsWithChildren } from 'react';
import { savedCarsStorageKey, useLocalStorage } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

type GarageState = {
  cars: Car[];
  loading: boolean;
  error: string | null;
  savedCarIds: string[];
  toggleSavedCar: (id: string) => void;
};

const GarageContext = createContext<GarageState | null>(null);

function toggleCar(ids: string[], id: string) {
  return ids.includes(id) ? ids.filter((savedId) => savedId !== id) : [...ids, id];
}

function readSavedCars(value: string | null): string[] {
  try {
    const parsed: unknown = JSON.parse(value ?? `[]`);

    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === `string`) : [];
  } catch {
    return [];
  }
}

export function GarageProvider({ children }: PropsWithChildren) {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savedCarIds, setSavedCarIds] = useState<string[]>([]);
  const savedIdsRef = useRef<string[]>([]);
  const pendingToggles = useRef<string[]>([]);
  const storageHydrated = useRef(!useLocalStorage);
  const storageWrites = useRef<Promise<void>>(Promise.resolve());

  const persistSavedCars = useCallback((ids: string[]) => {
    if (!useLocalStorage) return;

    storageWrites.current = storageWrites.current
      .then(() => AsyncStorage.setItem(savedCarsStorageKey, JSON.stringify(ids)))
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    let active = true;

    const hydrateSavedCars = async () => {
      const storedValue = useLocalStorage
        ? await AsyncStorage.getItem(savedCarsStorageKey).catch(() => null)
        : null;

      if (!active) return;

      const hydratedIds = pendingToggles.current.reduce(toggleCar, readSavedCars(storedValue));
      const hadPendingToggles = pendingToggles.current.length > 0;

      savedIdsRef.current = hydratedIds;
      storageHydrated.current = true;
      pendingToggles.current = [];
      setSavedCarIds(hydratedIds);

      if (hadPendingToggles) persistSavedCars(hydratedIds);
    };

    const loadCars = async () => {
      try {
        const loadedCars = await getCars();

        if (active) setCars(loadedCars);
      } catch (caughtError) {
        if (active) {
          setError(caughtError instanceof Error ? caughtError.message : `The collection could not be loaded.`);
        }
      }
    };

    Promise.all([loadCars(), hydrateSavedCars()]).then(() => {
      if (active) setLoading(false);
    });

    return () => {
      active = false;
    };
  }, [persistSavedCars]);

  const toggleSavedCar = useCallback((id: string) => {
    const nextIds = toggleCar(savedIdsRef.current, id);

    savedIdsRef.current = nextIds;
    setSavedCarIds(nextIds);

    if (!storageHydrated.current) {
      pendingToggles.current.push(id);
      return;
    }

    persistSavedCars(nextIds);
  }, [persistSavedCars]);

  const value = useMemo(() => ({
    cars,
    error,
    loading,
    savedCarIds,
    toggleSavedCar,
  }), [cars, error, loading, savedCarIds, toggleSavedCar]);

  return (
    <GarageContext.Provider value={value}>
      {children}
    </GarageContext.Provider>
  );
}

export function useGarage() {
  const garage = useContext(GarageContext);

  if (!garage) {
    throw new Error(`useGarage must be used inside GarageProvider.`);
  }

  return garage;
}
