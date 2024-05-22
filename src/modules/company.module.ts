import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyService } from '../company/company.service';
import { CompanyController } from '../company/company.controller';
import { CompanySchema } from '../entities/company.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
