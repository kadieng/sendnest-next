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

export interface User {
  IsLoggedIn: true;
  IsVerified: true;
  address: string;
  avatar?: string;
  country: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  middleName: string;
  password: string;
  phone: string;
  postalCode: null;
  role: string;
  state: string;
  username: string;
}
