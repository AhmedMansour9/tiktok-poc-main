import axios from 'axios';
import { NetworkConfig } from './config';

const httpClient = axios.create({
  baseURL: NetworkConfig.baseURL,
  timeout: NetworkConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default httpClient;