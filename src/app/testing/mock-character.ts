import { IResponse } from '../model/response.model';
import { IResponseData } from '../model/response-data.model';
import { ICharacter } from '../model/character.model';

export const mockResponseCharactersList: IResponse = {
  code: 200,
  status: 'Ok',
  data: {
    count: 1,
    limit: 20,
    total: 1,
    results: [
      {
        id: 1,
        name: 'Hulk',
        description: 'Hulk character',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
          extension: 'jpg',
        },
        comics: {
          available: 0,
          returned: 0,
          items: [],
        },
        series: {
          available: 0,
          returned: 0,
          items: [],
        },
      },
    ],
  },
};

export const mockCharactersList: IResponseData = {
  count: 1,
  limit: 20,
  total: 1,
  results: [
    {
      id: 1,
      name: 'Hulk',
      description: 'Hulk character',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
        extension: 'jpg',
      },
      comics: {
        available: 0,
        returned: 0,
        items: [],
      },
      series: {
        available: 0,
        returned: 0,
        items: [],
      },
    },
  ],
};

export const mockCharacter: ICharacter = {
  id: 1,
  name: 'Hulk',
  description: 'Hulk character',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
    extension: 'jpg',
  },
  comics: {
    available: 0,
    returned: 0,
    items: [],
  },
  series: {
    available: 0,
    returned: 0,
    items: [],
  },
};
