import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './schema/users.schema';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly _usersModel: Model<UsersDocument>,
  ) {}

  async findById(id: string): Promise<Users> {
    return this._usersModel.findById(id).exec();
  }
  async findOne(email: string): Promise<Users> {
    return this._usersModel.findOne({ email }).exec();
  }

  async create(registerDTO: RegisterDTO): Promise<Users> {
    const { email } = registerDTO;

    const existingUser = await this._usersModel.findOne({ email }).exec();
    if (existingUser) {
      throw new ConflictException('Email is alreay Exist');
    }

    const createdUser = new this._usersModel(registerDTO);
    return createdUser.save();
  }
}
