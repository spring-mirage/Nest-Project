import { Controller, Get, Post } from '@nestjs/common';
//localhost:3000/users
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'You made a GET request to get all users!';
  }

  @Post()
  createUsers() {
    return 'You made a POST request to create a user!';
  }
}
