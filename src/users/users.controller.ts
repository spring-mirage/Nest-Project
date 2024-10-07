import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
//localhost:3000/users
@Controller('users')
export class UsersController {
	@Get()
	getUsers(@Query() query: any) {
        const usersService = new UsersService();
        if (query.gender) {
            return usersService.getAllUsers().filter(u => u.gender === query.gender)
        }
        return usersService.getAllUsers();
    }

    //when you use '?' ':id/:name/:gender?' is optional parammeter
    //if you want to get all params don't put anything in the Params decorator and put param: any
    @Get(':id')
    getUserById(@Param('id') id: any) {
        const usersService = new UsersService();
        return usersService.getUserById(+id);   
    }

	@Post()
	createUsers() {
        const user = {id: 6, name: 'John Doe', age: 30, gender: 'male', isMarried: false}
        const usersService = new UsersService();
        usersService.createUser(user);
        return 'User created';
    }
}
