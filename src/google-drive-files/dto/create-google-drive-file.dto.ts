import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGoogleDriveFileDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  EmployeeId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  FileName: string;
}
