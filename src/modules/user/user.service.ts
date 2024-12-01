import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UploadAvatarDto } from './dto/upload-avatar-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(page: number, pageSize: number) {
    pageSize = +pageSize > 0 ? +pageSize : 3;
    page = +page > 0 ? +page : 1;

    const skip = (page - 1) * pageSize;
    //tính index bắt đầu lấy trong db cho skip

    const totalItems = await this.prismaService.users.count();

    const totalPages = Math.ceil(totalItems / pageSize);
    const results = await this.prismaService.users.findMany({
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

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async uploadAvatarLocal(avatar: Express.Multer.File) {
    console.log(avatar);
    return `This action successful`;
  }
}
