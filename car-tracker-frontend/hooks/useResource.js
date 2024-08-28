// hooks/useResource.js
import useSWR from 'swr';
import axios from 'axios';

// Example API URL and fetcher function
const API_URL = 'https://api.api-ninjas.com/v1/cars';
const fetcher = url => axios.get(url, { headers: { 'X-Api-Key': 'YOUR_API_KEY' } }).then(res => res.data);

export function useResource(model = '', limit = 2) {
  const url = `${API_URL}?limit=${limit}&model=${model}`;
  const { data: cars, error, mutate } = useSWR(url, fetcher);

  return {
    cars,
    isLoading: !error && !cars,
    isError: error,
  };
}
