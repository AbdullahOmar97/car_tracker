// app/car/[id]/page.js
import { useResource } from '../../../hooks/useResource';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CarForm from '../../../components/CarForm';

export default function EditCarPage() {
  const { updateCar, deleteCar, cars } = useResource();
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (cars) {
      const carToEdit = cars.find(c => c.id === parseInt(id));
      setCar(carToEdit);
    }
  }, [id, cars]);

  const handleUpdate = async (updatedCar) => {
    await updateCar(id, updatedCar);
    router.push('/'); // Redirect to home page
  };

  const handleDelete = async () => {
    await deleteCar(id);
    router.push('/'); // Redirect to home page
  };

  if (!car) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Car</h1>
      <CarForm onSubmit={handleUpdate} initialData={car} />
      <button onClick={handleDelete}>Delete Car</button>
    </div>
  );
}
