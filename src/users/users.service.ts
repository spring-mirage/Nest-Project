import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean }[] = [
        { id: 1, name: 'John', email: 'john@gmail.com', gender: 'male', isMarried: true },
        { id: 2, name: 'Jane', email: 'jane@gmail.com', gender: 'female', isMarried: false },
        { id: 3, name: 'Bob', email: 'bob@gmail.com', gender: 'male', isMarried: true },
        { id: 4, name: 'Alice', email: 'alice@gmail.com', gender: 'female', isMarried: false },
        { id: 5, name: 'Tom', email: 'tom@gmail.com', gender: 'male', isMarried: false }
    ]

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: { id: number, name: string, email: string, gender: string, isMarried: boolean }) {
        this.users.push(user);
    }
}
