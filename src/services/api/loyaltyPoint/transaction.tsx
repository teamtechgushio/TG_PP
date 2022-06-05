import {LOYALTY_POINT, TRANSACTION} from '@constants';
import {API} from '../apiService';

type Payload = {
  make: string;
};

export const getRentalItemMake = (data: Payload) => {
  return API.post(`${LOYALTY_POINT}/${TRANSACTION}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalItemMake: ', error);
    });
};
