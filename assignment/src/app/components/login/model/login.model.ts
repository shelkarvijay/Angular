export class LoginModel{
    username?: string;
    password?: string;

    clear(){
        this.username = '';
        this.password = '';
    }
}