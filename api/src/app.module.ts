import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { RestaurantesModule } from './resources/restaurantes/restaurantes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule,
    RestaurantesModule,
    MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
