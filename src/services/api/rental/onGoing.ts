import {ONGOING, RENTAL_CONTRACT} from '@constants';
import {RentalContractPayload} from '@types';
import {API} from '../apiService';

export const getRentalContractOnGoing = (data: RentalContractPayload) => {
  return API.post(`${RENTAL_CONTRACT}/${ONGOING}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalContractOnGoing: ', error);
    });
};
