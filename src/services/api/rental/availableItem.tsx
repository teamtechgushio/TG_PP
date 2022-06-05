import {AVAILABLE_ITEM, RENTAL_ITEM} from '@constants';
import {API} from '../apiService';

type Payload = {
  rentalitemid: string;
  registrationno: string;
  make: string;
  model: string;
  itemcategory: string;
};

export const getAvailableItems = (data: Payload) => {
  return API.post(`${RENTAL_ITEM}/${AVAILABLE_ITEM}`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log('Error *getAvailableItems: ', error);
    });
};
