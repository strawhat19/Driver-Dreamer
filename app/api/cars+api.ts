import { sampleCars } from '../../src/shared/data/cars';

export function GET() {
  return Response.json({
    ok: true,
    cars: sampleCars,
  });
}
