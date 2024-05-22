import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUsersTaskDto {
  @IsString()
  @IsNotEmpty()
  readonly userId: string;

  @IsString()
  @IsNotEmpty()
  readonly taskId: string;
}
