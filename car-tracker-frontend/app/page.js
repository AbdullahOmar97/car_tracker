// app/page.js
import { useResource } from '../hooks/useResource';
import CarList from '../components/CarList';

export default function HomePage() {
  const { cars, isLoading, isError } = useResource();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cars.</div>;

  return (
    <div>
      <h1>Car List</h1>
      <CarList cars={cars} />
      <a href="/car/add">Add New Car</a>
    </div>
  );
}
