export class UserModel {
    id?: number;
    name?: string;
    phone?: number;
    username?: string;
    email?: string;
    address?: string;

    clear() {
        this.id = null;
        this.name = '';
        this.phone = null;
        this.username = '';
        this.email = '';
        this.address = '';
    }
}