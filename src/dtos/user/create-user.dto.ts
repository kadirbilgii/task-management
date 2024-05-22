import { IsString, IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { UserRole } from '../../enums/user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsEnum(UserRole)
  @IsOptional()
  readonly role?: UserRole;
}
