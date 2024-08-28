// components/CarForm.js
import React, { useState } from 'react';

export default function CarForm({ onSubmit, initialData = {} }) {
  const [make, setMake] = useState(initialData.make || '');
  const [model, setModel] = useState(initialData.model || '');
  const [year, setYear] = useState(initialData.year || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ make, model, year });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Make:</label>
        <input value={make} onChange={(e) => setMake(e.target.value)} required />
      </div>
      <div>
        <label>Model:</label>
        <input value={model} onChange={(e) => setModel(e.target.value)} required />
      </div>
      <div>
        <label>Year:</label>
        <input value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
