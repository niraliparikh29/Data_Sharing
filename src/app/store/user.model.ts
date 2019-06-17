export interface IUser {
    id: String;
    employee_name:String;
    employee_salary: String;
    employee_age:String;
}

export interface State {
    loading: boolean;
    failed:boolean;
    success:boolean;
    posts:IUser[];
    errMsg : string
}

export interface Contact {
    age:Number;
    email:String;
    message:String;
    name:String;
}

export interface ContactState {
    loading: boolean;
    failed:boolean;
    data:Contact[];
    errMsg : string
}
