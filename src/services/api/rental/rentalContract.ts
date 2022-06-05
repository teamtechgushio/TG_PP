import {RENTAL_CONTRACT} from '@constants';
import {RentalContractPayload} from '@types';
import {API} from '../apiService';

export const getRentalContract = () => {
  let RentalContractPayload = {
    custcode: "",
    department: "",
    contactperson: ""
  }
  return API.post(`${RENTAL_CONTRACT}`, RentalContractPayload)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log('Error *getRentalContract: ', error);
    });
};
