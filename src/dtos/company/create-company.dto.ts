import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
