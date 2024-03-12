import { IResponseData } from './response-data.model';

export interface IResponse {
  code: number;
  status: string;
  data: IResponseData;
}
