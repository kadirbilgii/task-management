import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { TaskModule } from './modules/task.module';
import { UsersTaskModule } from './modules/users-task.module';
import { CompanyModule } from './modules/company.module';
import { CompanyUserModule } from './modules/company-user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/db?directConnection=true', {
    }),
    UserModule,
    TaskModule,
    UsersTaskModule,
    CompanyModule,
    CompanyUserModule,
  ],
})
export class AppModule {}
