export interface GetListResponseType {
  data: Array<DataType>;
}
export interface DataType {
  id: string;
  name: string;
  avatar: string;
  job: string;
  description?: string;
}
