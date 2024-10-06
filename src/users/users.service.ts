import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: { id: number, name: string, age:number, gender: string, isMarried: boolean }[] = [
        { id: 1, name: 'John', age: 30, gender: 'male', isMarried: true },
        { id: 2, name: 'Jane', age: 25, gender: 'female', isMarried: false },
        { id: 3, name: 'Bob', age: 40, gender: 'male', isMarried: true },
        { id: 4, name: 'Alice', age: 35, gender: 'female', isMarried: false },
        { id: 5, name: 'Tom', age: 20, gender: 'male', isMarried: false }
    ]

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: { id: number, name: string, age:number, gender: string, isMarried: boolean }) {
        this.users.push(user);
    }
}
