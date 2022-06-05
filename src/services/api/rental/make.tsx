import {MAKE, RENTAL_ITEM} from '@constants';
import {API} from '../apiService';

type Payload = {
  make: string;
};

export const getRentalItemMake = (data: Payload) => {
  return API.post(`${RENTAL_ITEM}/${MAKE}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalItemMake: ', error);
    });
};
