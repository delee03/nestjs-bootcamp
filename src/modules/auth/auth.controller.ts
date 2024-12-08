import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/common/decorater/public.decorater';
import { handleSuccessResponse } from 'src/common/helpers/response.helper';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('protect'))
  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Đăng nhập' })
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
