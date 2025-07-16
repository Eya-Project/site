export type CountryType = {
  name: string;
  latitude: number;
  longitude: number;
};

export type ImamType = {
  imamId: string;
  name: string;
  profileImage: {
    alt: string;
    url: string;
  };
  description: string;
  email?: string;
  phone?: string;
  country: CountryType;
  specials: Array<string>;
};

export type FullImamType = ImamType & {
  backgroundImage?: { alt: string; url: string };
  bio: any;
};
