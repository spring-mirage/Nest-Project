import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTOs/create-user.dto';
import { GetUserParamDto } from './DTOs/get-user.param.dto';


//localhost:3000/users
@Controller('users')
export class UsersController {
    userService: UsersService;
    constructor() {
        this.userService = new UsersService();
    }

    @Get(':isMarried?')
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit:number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Param() param: GetUserParamDto
    ) {
        console.log(param)
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.getUserById(id);
    }

    //@Body(new ValidationPipe()) 
    @Post()
    createUsers(@Body() user: CreateUserDto ){
        // this.userService.createUser(user);
        console.log(user instanceof CreateUserDto);
        return 'A new user has been created';
    }
}




// @Controller('users')
// export class UsersController {
// 	@Get()
// 	getUsers(@Query() query: any) {
//         const usersService = new UsersService();
//         if (query.gender) {
//             return usersService.getAllUsers().filter(u => u.gender === query.gender)
//         }
//         return usersService.getAllUsers();
//     }

//     //when you use '?' ':id/:name/:gender?' is optional parammeter
//     //if you want to get all params don't put anything in the Params decorator and put param: any
//     @Get(':id')
//     getUserById(@Param('id') id: any) {
//         const usersService = new UsersService();
//         return usersService.getUserById(+id);   
//     }

// 	@Post()
// 	createUsers() {
//         const user = {id: 6, name: 'John Doe', age: 30, gender: 'male', isMarried: false}
//         const usersService = new UsersService();
//         usersService.createUser(user);
//         return 'User created';
//     }
// }
