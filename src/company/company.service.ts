import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dtos/company/create-company.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CompanyService {
  constructor(@InjectModel('Company') private companyModel: Model<Company>) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = new this.companyModel({
      _id: uuidv4(),
      ...createCompanyDto,
    });
    return newCompany.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<Company> {
    return this.companyModel.findById(id).exec();
  }

  async update(id: string, updateCompanyDto: any): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(id, updateCompanyDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Company> {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}
