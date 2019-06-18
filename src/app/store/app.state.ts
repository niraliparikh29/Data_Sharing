// Contact NGRX  
export interface Contact {
  name: String;
  email: String;
  age: Number;
  message: String;
}

export interface AppState {
  userData: Contact[];
}

//User NGRx

export interface IUser {
  id: String;
  employee_name: String;
  employee_salary: String;
  employee_age: String;
}

export interface State {
  data: IUser[];
}
