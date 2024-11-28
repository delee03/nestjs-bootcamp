import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { VideoTypeService } from './video-type.service';
import { access } from 'fs';
import { Request } from 'express';
import { TVideoType } from 'src/common/@type/video-type';

@Controller('video')
export class VideoTypeController {
  constructor(private readonly videoTypeService: VideoTypeService) {}

  @Get('video-type')
  async getVideoType(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Req() req: Request,
  ) {
    // console.log(req);
    console.log({ page, pageSize });
    return await this.videoTypeService.getVideoType(page, pageSize);
  }

  @Get('video-type/:id')
  async getVideoTypeById(@Param('id') id: string) {
    // console.log(id);
    return await this.videoTypeService.getVideoTypeById(id);
  }

  //create-video-type
  @Post('video-type')
  async createVideoType(@Body() body: TVideoType) {
    return await this.videoTypeService.createVideoType(body);
  }
}
