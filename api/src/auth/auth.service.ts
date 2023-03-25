import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/users/dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt.strategy';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUserById(userId: string): Promise<any> {
    const user = await this.usersService.findOne(userId);
    console.log('user', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async login(loginDTO: LoginDTO): Promise<{ access_token: string }> {
    const { email, password } = loginDTO;

    try {
      const user = await this.usersService.findOne(email);
      const passwordMatches = await bcrypt.compare(password, user.password);

      if (user && passwordMatches) {
        const payload: JwtPayload = {
          sub: user.email,
          email: user.email,
        };
        console.log('payload', payload);
        return {
          access_token: this.jwtService.sign(payload),
        };
      } else {
        throw new UnauthorizedException('Invalid Credentials');
      }
    } catch (error) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }
}
