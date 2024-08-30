// app/cars/[id]/page.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useResource } from '../../hooks/useResource';

export default function UpdateCar({ params }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const { data } = useResource('http://127.0.0.1:8000/api/cars/');
  const { update } = useResource('http://127.0.0.1:8000/api/cars/');
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (!id) return;
    const fetchCar = async () => {
      const car = await fetch(`http://127.0.0.1:8000/api/cars/${id}/`).then((res) => res.json());
      setBrand(car.brand);
      setModel(car.model);
      setYear(car.year);
    };
    fetchCar();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update(id, { brand, model, year });
    router.push('/cars');
  };

  return (
    <div>
      <h1>Update Car</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Model"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          type="number"
        />
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
}
