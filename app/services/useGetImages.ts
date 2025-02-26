import {useEffect, useState} from 'react';

import {Animal} from '../types/animal';
import {apiInstance_cat, apiInstance_dog} from './api';
import { Toast } from 'toastify-react-native';

function useGetImages() {
  const [loading, setLoading] = useState(false);
  const [resultCats, setResultCats] = useState<Animal[]>([]);
  const [resultDogs, setResultDogs] = useState<Animal[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const Images = async () => {
      try {
        setLoading(true);
        const resultDog = await apiInstance_dog.get('/images/search?limit=20');
        const resultCat = await apiInstance_cat.get('/images/search?limit=20');

        setResultCats(resultCat.data || []);
        setResultDogs(resultDog.data || []);
      } catch (error) {
        console.log('error in fetch images:', error);
        Toast.error("Ocurrió un error. Intentelo más tarde.");
      } finally {
        setLoading(false);
      }
    };

    Images();
  }, []);

  return {resultCats, resultDogs, error, loading};
}

export default useGetImages;
