export interface ICharacter {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    returned: number;
    items: {
      name: string;
    }[];
  };
  series: {
    available: number;
    returned: number;
    items: {
      name: string;
    }[];
  };
}
