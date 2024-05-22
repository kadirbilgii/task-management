import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersTaskService } from '../users-task/users-task.service';
import { UsersTaskController } from '../users-task/users-task.controller';
import { UsersTaskSchema } from '../entities/users-task.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'UsersTask', schema: UsersTaskSchema }])],
  controllers: [UsersTaskController],
  providers: [UsersTaskService],
})
export class UsersTaskModule {}
