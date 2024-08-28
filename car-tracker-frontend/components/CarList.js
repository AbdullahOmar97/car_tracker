// components/CarList.js
import React from 'react';

export default function CarList({ cars }) {
  if (!cars || cars.length === 0) return <div>No cars available.</div>;

  return (
    <ul>
      {cars.map(car => (
        <li key={car.id}>
          {car.make} {car.model} ({car.year}) - <a href={`/car/${car.id}`}>Edit</a>
        </li>
      ))}
    </ul>
  );
}
