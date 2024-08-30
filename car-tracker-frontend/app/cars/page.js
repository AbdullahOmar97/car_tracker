// app/cars/page.js
import { useResource } from '../../hooks/useResource';
import { useRouter } from 'next/navigation';

export default function CarsList() {
  const { data, error, delete: deleteCar } = useResource('http://127.0.0.1:8000/api/cars/');
  const router = useRouter();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleDelete = async (id) => {
    await deleteCar(id);
  };

  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {data.map((car) => (
          <li key={car.id}>
            {car.brand} {car.model} ({car.year})
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push('/cars/add')}>Add New Car</button>
    </div>
  );
}
