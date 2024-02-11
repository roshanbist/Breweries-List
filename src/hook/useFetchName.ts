import React, { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

const useFetchName = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response: AxiosResponse<T[]> = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          setError(axiosError.message);
        } else {
          setError('An error occured');
        }
        setLoading(false);
      }
    };

    fetchName();
  }, [url]);

  return { data, loading, error };
};

export default useFetchName;
