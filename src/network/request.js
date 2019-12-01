import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'http://120.77.181.41:3000',
    timeout: 50000,
    
  });
  return instance(config);
}
