import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyUserService } from '../company-user/company-user.service';
import { CompanyUserController } from '../company-user/company-user.controller';
import { CompanyUserSchema } from '../entities/company-user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CompanyUser', schema: CompanyUserSchema }])],
  controllers: [CompanyUserController],
  providers: [CompanyUserService],
})
export class CompanyUserModule {}
