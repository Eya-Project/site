export type CountryType = {
  name: string;
  latitude: number;
  longitude: number;
};

export type ImamType = {
  name: string;
  profileImage: {
    alt: string;
    url: string;
  };
  description: string;
  email?: string;
  phone?: string;
  country: CountryType;
  specials: Array<string>
};
