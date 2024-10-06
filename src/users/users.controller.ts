import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
//localhost:3000/users
@Controller('users')
export class UsersController {

	@Get()
	getUsers() {
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

	@Post()
	createUsers() {
        const user = {id: 6, name: 'John Doe', age: 30, gender: 'male', isMarried: false}
        const usersService = new UsersService();
        usersService.createUser(user);
        return 'User created';
    }
}
