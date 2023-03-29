import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { LoginDTO } from 'src/users/dto/login.dto';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserById(userId: string): Promise<any> {
    const user = await this.usersService.findOne(userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async login(loginDTO: LoginDTO): Promise<{ access_token: string }> {
    const { email, password } = loginDTO;

    try {
      const loginUser = await this.usersService.findOne(email);

      const passwordMatches = await bcrypt.compare(
        password,
        loginUser.password,
      );

      if (loginUser && passwordMatches) {
        const payload: JwtPayload = {
          sub: loginUser.email,
          email: loginUser.email,
          rol: loginUser.rol,
        };

        const token = this.jwtService.sign({
          sub: payload.email,
          email: payload.email,
          rol: payload.rol,
        });

        return {
          access_token: token,
        };
      } else {
        throw new UnauthorizedException('Invalid Credentials');
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
