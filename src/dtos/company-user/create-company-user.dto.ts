import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { UserRole } from '../../enums/user-role.enum';

export class CreateCompanyUserDto {
  @IsString()
  @IsNotEmpty()
  readonly companyId: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsEnum(UserRole)
  @IsNotEmpty()
  readonly role: UserRole;
}
