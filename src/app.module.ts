import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/db?directConnection=true', {
    }),
    UserModule,
    TaskModule,
  ],
})
export class AppModule {}
