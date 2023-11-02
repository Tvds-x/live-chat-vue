export interface sendCodeResponse{
  email: string;
  name: string;
  error?:{
    responseCode: number
  }
}