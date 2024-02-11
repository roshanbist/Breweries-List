import React, { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError('');

    const fetchData = async () => {
      try {
        const response: AxiosResponse<T[]> = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          setError(axiosError.message);
        } else {
          setError('An error occurred');
        }
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
