import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Model, connect } from 'mongoose';

import { AuthService } from './auth.service';
import { Users } from '../users/schema/users.schema';
import { AppController } from '../app.controller';
import { UserSchema } from '../users/schema/users.schema';
import { AppService } from '../app.service';
import { UsersController } from '../users/users.controller';
import { AuthController } from './auth.controller';
import { userStub } from '../users/test/stubs/user.stub';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authController: AuthController;
  let userController: UsersController;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let userModel: Model<Users>;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    mongoConnection = (await connect(uri)).connection;
    userModel = mongoConnection.model(Users.name, UserSchema);

    const app: TestingModule = await Test.createTestingModule({
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

    authController = app.get<AuthController>(AuthController);
    userController = app.get<UsersController>(UsersController);
  });

  describe('registerUsers', () => {
    it('should return the saved object', async () => {
      /*const createdUsers = await authController.register(userStub);
      expect(createdUsers.email).toBe(userStub.email);*/
    });
  });
});
