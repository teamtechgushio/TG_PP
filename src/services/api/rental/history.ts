import {HISTORY, RENTAL_CONTRACT} from '@constants';
import {RentalContractPayload} from '@types';
import {API} from '../apiService';

export const getRentalContractHistory = (data: RentalContractPayload) => {
  return API.post(`${RENTAL_CONTRACT}/${HISTORY}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalContractHistory: ', error);
    });
};
