// app/cars/add/page.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useResource } from '../../hooks/useResource';

export default function AddCar() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const { create } = useResource('http://127.0.0.1:8000/api/cars/');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create({ brand, model, year });
    setBrand('');
    setModel('');
    setYear('');
    router.push('/cars');
  };

  return (
    <div>
      <h1>Add a New Car</h1>
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
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}
