import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersTaskService } from './users-task.service';
import { CreateUsersTaskDto } from '../dtos/users-task/create-users-task.dto';
import { UpdateUsersTaskDto } from '../dtos/users-task/update-users-task.dto';

@Controller('users-tasks')
export class UsersTaskController {
  constructor(private readonly usersTaskService: UsersTaskService) {}

  @Post('/create')
  create(@Body() createUsersTaskDto: CreateUsersTaskDto) {
    return this.usersTaskService.create(createUsersTaskDto);
  }

  @Get()
  findAll() {
    return this.usersTaskService.findAll();
  }

  @Get(':id')
findOne(@Param('id') id: string) {
    return this.usersTaskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersTaskDto: UpdateUsersTaskDto) {
    return this.usersTaskService.update(id, updateUsersTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersTaskService.remove(id);
  }
}
