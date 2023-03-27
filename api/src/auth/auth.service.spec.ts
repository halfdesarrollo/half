import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UsersService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersService, JwtService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('login', () => {
    it('should return an access token if the email and password are correct', async () => {
      const email = 'email@test.cls';
      const password = 'testpassword';

      const user = {
        email,
        password,
        name: 'nametest',
        phoneNumber: 12312,
        rol: 'CLIENTE',
        contacts: [],
      };

      jest.spyOn(userService, 'findOne').mockImplementation(async () => user);
      jest
        .spyOn(jwtService, 'sign')
        .mockImplementation(() => 'fake-access-token');

      const result = await authService.login({ email, password });
      expect(result).toBeDefined();
      expect(result.access_token).toEqual('fake-acess-token');
    });
  });
});
