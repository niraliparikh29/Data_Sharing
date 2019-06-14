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