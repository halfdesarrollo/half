import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersController } from '../users/users.controller';
import { getModelToken } from '@nestjs/mongoose';
import { Users, UserSchema } from '../users/schema/users.schema';
import { JwtService } from '@nestjs/jwt';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AuthController, UsersController],
      providers: [
        AuthService,
        UsersService,
        { provide: getModelToken(Users.name), useValue: UserSchema },
        {
          provide: JwtService,
          useValue: {
            sign: () => 'token',
          },
        },
      ],
    }).compile();

    authController = moduleRef.get<AuthController>(AuthController);
    authService = moduleRef.get<AuthService>(AuthService);
    usersService = moduleRef.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });
});
