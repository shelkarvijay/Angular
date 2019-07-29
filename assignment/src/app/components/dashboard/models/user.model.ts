export class UserModel {
    id?: number;
    name?: string;
    phone?: number;
    username?: string;
    email?: string;
    address?: {city: string, street: string};

    clear() {
        this.id = null;
        this.name = '';
        this.phone = null;
        this.username = '';
        this.email = '';
        this.address = {city: '', street: ''};
    }
}