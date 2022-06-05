import {ITEM_CATEGORY, RENTAL_ITEM} from '@constants';
import {API} from '../apiService';

type Payload = {
  itemcategory: string;
};

export const getRentalItemCategory = (data: Payload) => {
  return API.post(`${RENTAL_ITEM}/${ITEM_CATEGORY}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalItemCategory: ', error);
    });
};
