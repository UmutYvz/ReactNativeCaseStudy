import {DataType} from '../api/ApiTypes';

export type AppParams = {
  ListPage: undefined;
  DetailPage: {item: DataType};
  NewRegisterPage: {
    setData: (params: any) => void;
  };
};
