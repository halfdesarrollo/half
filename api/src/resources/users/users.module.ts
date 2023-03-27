import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersSchema } from './schema/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Users.name,
    schema: UsersSchema
  }])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
