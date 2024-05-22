import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyUser } from '../entities/company-user.entity';
import { CreateCompanyUserDto } from '../dtos/company-user/create-company-user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CompanyUserService {
  constructor(@InjectModel('CompanyUser') private companyUserModel: Model<CompanyUser>) {}

  async create(createCompanyUserDto: CreateCompanyUserDto): Promise<CompanyUser> {
    const newCompanyUser = new this.companyUserModel({
      _id: uuidv4(),
      ...createCompanyUserDto,
    });
    return newCompanyUser.save();
  }

  async findAll(): Promise<CompanyUser[]> {
    return this.companyUserModel.find().exec();
  }

  async findOne(id: string): Promise<CompanyUser> {
    return this.companyUserModel.findById(id).exec();
  }

  async update(id: string, updateCompanyUserDto: any): Promise<CompanyUser> {
    return this.companyUserModel.findByIdAndUpdate(id, updateCompanyUserDto, { new: true }).exec();
  }

  async remove(id: string): Promise<CompanyUser> {
    return this.companyUserModel.findByIdAndDelete(id).exec();
  }
}
