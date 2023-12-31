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

export interface GetBeneficiaries {
  accountName: string;
  accountNumber: string;
  bankName: string;
  id: string;
  user_id: string;
}

export interface CreateBeneficiaries {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export interface UpdateUser {
  // file: File | null;
  username: string;
  phone: string;
  country: string;
  state: string;
  address: string;
}

export interface PasswordUpdate {
  oldpassword: string;
  newpassword: string;
}

export interface ToastSuccessProps {
  description: string;
  //   stay?: boolean;
}

export interface Bank {
  code: string;
  name: string;
}

interface UserAvatar {
  link?: string | null;
  file?: File | null;
}
