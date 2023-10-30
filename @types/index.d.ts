export interface CountryType {
  currency: string;
  flag: string;
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
  phonecode: string;
  timezones: TimeZone[];
}

export interface TimeZone {
  abbreviation: string;
  gmtOffset: number;
  gmtOffsetName: string;
  tzName: string;
  zoneName: string;
}

export interface StateType {
  countryCode: string;
  isoCode: string;
  latitude: string;
  longitude: string;
  name: string;
}

export interface AuthContextProps {
  user: User | undefined;
  handleUser: (value: User | undefined) => void;
}

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  country: string;
  state: string;
  address: string;
  role: string;
  phone: string;
  avatar: string;
  email: string;
  IsLoggedIn: boolean;
  IsVerified: boolean;
  username: string;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
  refreshToken: string;
};
