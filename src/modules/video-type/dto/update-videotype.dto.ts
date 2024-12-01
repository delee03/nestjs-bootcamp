import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoTypeDto } from './create-videotype.dto';

export class UpdateVideoTypeDto extends PartialType(CreateVideoTypeDto) {}
