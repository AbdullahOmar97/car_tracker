// hooks/useResource.js
import useSWR, { mutate } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcherWithMethod = (url, method, data) =>
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export function useResource(apiUrl) {
  const { data, error, mutate: swrMutate } = useSWR(apiUrl, fetcher);

  const create = async (newResource) => {
    await fetcherWithMethod(apiUrl, 'POST', newResource);
    swrMutate(); // Refresh data
  };

  const update = async (id, updatedResource) => {
    await fetcherWithMethod(`${apiUrl}/${id}/`, 'PUT', updatedResource);
    swrMutate(); // Refresh data
  };

  const deleteResource = async (id) => {
    await fetch(`${apiUrl}/${id}/`, { method: 'DELETE' });
    swrMutate(); // Refresh data
  };

  return {
    data,
    error,
    create,
    update,
    delete: deleteResource,
  };
}
