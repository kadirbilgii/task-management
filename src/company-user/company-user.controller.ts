import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyUserService } from './company-user.service';
import { CreateCompanyUserDto } from '../dtos/company-user/create-company-user.dto';

@Controller('company-users')
export class CompanyUserController {
  constructor(private readonly companyUserService: CompanyUserService) {}

  @Post('/create')
  create(@Body() createCompanyUserDto: CreateCompanyUserDto) {
    return this.companyUserService.create(createCompanyUserDto);
  }

  @Get()
  findAll() {
    return this.companyUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyUserDto: any) {
    return this.companyUserService.update(id, updateCompanyUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyUserService.remove(id);
  }
}
