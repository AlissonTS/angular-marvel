import { ICharacter } from './character.model';

export interface IResponseData {
  limit: number;
  total: number;
  count: number;
  results: ICharacter[];
}
