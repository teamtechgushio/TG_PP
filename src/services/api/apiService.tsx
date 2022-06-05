import {apiConfig} from '@config';
import {create} from 'apisauce';
import {dataToCamelCase} from './transformers';

const API = create({
  baseURL: apiConfig.baseUrl,
  headers: {
    APIKEY: apiConfig.apiKey,
  },
});

// API.setHeader('APIKEY', apiConfig.apiKey);

export {API};

// if (__DEV__ && apiConfig.testAccessToken) {
//   API.setHeader('Authorization', `Bearer ${apiConfig.testAccessToken}`);
// }

/**
 * Log response payload on dev environment
 * Although logs are not shown on production lol
 */
// API.addMonitor((response) => {
//   if (__DEV__) {
//     console.log('API Response:', response);
//   }
// });

//API.addRequestTransform(paramsToSnakeCase);
//API.addRequestTransform(firebaseRequestPerformanceMonitoring);
API.addResponseTransform(dataToCamelCase);
//API.addResponseTransform(firebaseResponsePerformanceMonitoring);
