import axios from 'axios';

// Instancia de Axios con configuración base
export const apiInstance_cat = axios.create({
  baseURL: process.env.API_URL_CAT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const apiInstance_dog = axios.create({
  baseURL: process.env.API_URL_DOG,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
