// import { Toast } from "expo-react-native-toastify";

import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {Animal} from '../types/animal';
import {Toast} from 'toastify-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Favorites {
  items: Animal[];
  addFavorite: (data: Animal) => void;
  removeFavorite: (data: Animal) => void;
  removeAllFavorites: () => void;
}

export const useFavorites = create<Favorites>()(
  persist(
    (set, get) => ({
      items: [],
      addFavorite: animal => {
        const currentFavorites = get().items;

        const existingItemInFavorites = currentFavorites.find(
          el => el.id === animal.id,
        );

        if (existingItemInFavorites) {
          return;
        }
        const productMarked = {...animal, favorite: true};

        set({items: [...currentFavorites, productMarked]});
        Toast.success('Agregado a tus favoritos ❤️‍🔥');
        console.log('Agregado a tus favoritos ❤️‍🔥');
      },

      removeFavorite: product => {
        const currentFavorites = get().items;

        const removeMarked = {...product, favorite: false};

        const newFavoritesList = currentFavorites.filter(
          el => el.id !== removeMarked.id,
        );
        Toast.success('Eliminado de tus favoritos');
        console.log('Eliminaste esta mascota de tus favoritos');

        set({items: newFavoritesList});
      },

      removeAllFavorites: () => {
        set({items: []});

        Toast.success('Eliminaste todos tus favoritos');
        console.log('Eliminaste todos tus favoritos');
      },
    }),

    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
