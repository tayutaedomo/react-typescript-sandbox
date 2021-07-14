import { useEffect, useState } from 'react';

export const useFetch = (url: string, options: any) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Refer: https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { response, error };
};
