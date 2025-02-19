import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findById(id)
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto)
  }

  @Patch(':id')
  updateUser(@Body() updateUserDto: any, @Param('id') id: string) {
    return this.userService.updateUser(updateUserDto, id)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id)
  }
}
