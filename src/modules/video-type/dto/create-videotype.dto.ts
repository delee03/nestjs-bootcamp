import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateVideoTypeDto {
  @ApiProperty({
    description: 'Dữ liệu phải là String',
    example: 'Loại video Comedy',
  })
  @IsString({ message: 'Dữ liệu phải là String ' })
  type_name: string;

  @ApiProperty()
  @IsString({ message: 'Dữ liệu phải là String ' })
  icon: string;
}
