import {create} from 'apisauce';

import {GetListResponseType} from './ApiTypes';

export const baseURL = 'https://5fc9346b2af77700165ae514.mockapi.io';

const api = create({
  baseURL: baseURL,
  headers: {},
});

export const getList = async (): Promise<GetListResponseType> => {
  const {data}: any = await api.get('/simpsons');
  return data;
};
