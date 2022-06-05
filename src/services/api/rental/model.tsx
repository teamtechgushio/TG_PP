import {MODEL, RENTAL_ITEM} from '@constants';
import {API} from '../apiService';

type Payload = {
  model: string;
};

export const getRentalItemModel = (data: Payload) => {
  return API.post(`${RENTAL_ITEM}/${MODEL}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalItemModel: ', error);
    });
};
