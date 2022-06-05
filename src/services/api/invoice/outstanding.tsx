import {INVOICE, OUTSTANDING} from '@constants';
import {API} from '../apiService';

type Payload = {
  rentalcontract: string;
};

export const getOutstandingInvoice = (data: Payload) => {
  return API.post(`${INVOICE}/${OUTSTANDING}`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log('Error *getOutstandingInvoice: ', error);
    });
};
