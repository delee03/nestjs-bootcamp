import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { TVideoType } from 'src/common/@type/video-type';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateVideoTypeDto } from './dto/create-videotype.dto';

@Injectable()
export class VideoTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async getVideoType(page: number, pageSize: number) {
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;

    const skip = (page - 1) * pageSize;
    //tính index bắt đầu lấy trong db cho skip

    const totalItems = await this.prisma.video_type.count();

    const totalPages = Math.ceil(totalItems / pageSize);
    const results = await this.prisma.video_type.findMany({
      take: pageSize,
      skip: skip,
      orderBy: {
        created_at: 'desc',
      },
    });

    return {
      page,
      pageSize,
      totalPages: totalPages,
      totalItems: totalItems,
      items: results || [],
    };
  }

  async getVideoTypeById(id: string) {
    const videoTypeDetail = await this.prisma.video_type.findUnique({
      where: {
        type_id: Number(id),
      },
    });
    return videoTypeDetail;
  }

  async createVideoType(body: CreateVideoTypeDto) {
    const newVT = await this.prisma.video_type.create({
      data: {
        type_name: body.type_name,
        icon: body.icon,
      },
    });
    return newVT;
  }
}
