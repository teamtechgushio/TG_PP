import {LOYALTY_POINT} from '@constants';
import {API} from '../apiService';

type Payload = {
  conttype: string;
  contid: string;
};

export const getLoyaltyPoint = (data: Payload) => {
  return API.post(`${LOYALTY_POINT}`, data)
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.log('Error *getLoyaltyPoint: ', error);
    });
};
