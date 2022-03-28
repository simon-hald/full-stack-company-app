export interface UserModel {
  name: string;
  email: string;
  socialSecurityNumber?: number
}

export interface UserModelFull extends UserModel {
  id: number
}
