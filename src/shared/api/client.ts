import type { Car } from '../types';
import { sampleCars } from '../data/cars';
import { apiBaseUrl, useLocalStorage } from '../config';

export async function getCars(): Promise<Car[]> {
  if (useLocalStorage) {
    return sampleCars.map((car) => ({ ...car }));
  }

  const response = await fetch(`${apiBaseUrl.replace(/\/$/, ``)}/api/cars`);

  if (!response.ok) {
    throw new Error(`The collection could not be loaded. Please try again.`);
  }

  const data: { cars: Car[] } = await response.json();

  return data.cars;
}
