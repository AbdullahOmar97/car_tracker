// app/car/add.js
import { useResource } from '../../hooks/useResource';
import CarForm from '../../components/CarForm';

export default function AddCarPage() {
  const { addCar } = useResource();

  const handleSubmit = async (car) => {
    await addCar(car);
    window.location.href = '/'; // Redirect to home page
  };

  return (
    <div>
      <h1>Add New Car</h1>
      <CarForm onSubmit={handleSubmit} />
    </div>
  );
}
