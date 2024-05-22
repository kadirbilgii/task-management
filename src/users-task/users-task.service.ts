import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersTask } from '../entities/users-task.entity';
import { CreateUsersTaskDto } from '../dtos/users-task/create-users-task.dto';
import { UpdateUsersTaskDto } from '../dtos/users-task/update-users-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersTaskService {
  constructor(@InjectModel('UsersTask') private usersTaskModel: Model<UsersTask>) {}

  async create(createUsersTaskDto: CreateUsersTaskDto): Promise<UsersTask> {
    const newUsersTask = new this.usersTaskModel({
      _id: uuidv4(),
      ...createUsersTaskDto,
    });
    return newUsersTask.save();
  }

  async findAll(): Promise<UsersTask[]> {
    return this.usersTaskModel.find().exec();
  }

  async findOne(id: string): Promise<UsersTask> {
    return this.usersTaskModel.findById(id).exec();
  }

  async update(id: string, updateUsersTaskDto: UpdateUsersTaskDto): Promise<UsersTask> {
    return this.usersTaskModel.findByIdAndUpdate(id, updateUsersTaskDto, { new: true }).exec();
  }

  async remove(id: string): Promise<UsersTask> {
    return this.usersTaskModel.findByIdAndDelete(id).exec();
  }
}
