import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { VideoTypeService } from './video-type.service';
import { access } from 'fs';
import { Request } from 'express';
import { TVideoType } from 'src/common/@type/video-type';

import { CreateVideoTypeDto } from './dto/create-videotype.dto';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/common/decorater/public.decorater';
import { ResponseInterceptor } from 'src/common/interceptor/response.interceptor';

@Controller('video')
@ApiTags('Video Type NÈ')
export class VideoTypeController {
  constructor(private readonly videoTypeService: VideoTypeService) {}

  // @Public()
  //@UseGuards(AuthGuard('protect'))
  @Get('video-type')
  async getVideoType(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Req() req: Request,
  ) {
    console.log(req?.user);
    console.log({ page, pageSize });
    return await this.videoTypeService.getVideoType(page, pageSize);
  }

  // @UseGuards(AuthGuard('protect'))
  @ApiConsumes('Video Demo')
  @ApiOperation({
    summary: 'Đây là enpoint để lấy list VideoType',
  })
  @Get('video-type/:id')
  async getVideoTypeById(@Param('id') id: string) {
    // console.log(id);
    return await this.videoTypeService.getVideoTypeById(id);
  }

  // @UseGuards(AuthGuard('protect'))
  //create-video-type
  @Post('video-type')
  async createVideoType(@Body() body: CreateVideoTypeDto) {
    return await this.videoTypeService.createVideoType(body);
  }
}
