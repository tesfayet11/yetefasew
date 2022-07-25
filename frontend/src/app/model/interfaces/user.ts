export interface User {
  email:string,
  nickName:string,
  password: string,
  firstName: string,
  lastName: string,
  postalCode: string
};

export interface AuthResult {
  token?:string
}
