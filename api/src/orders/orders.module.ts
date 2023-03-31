import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Orders, OrdersSchema } from './schema/orders.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Orders.name, schema: OrdersSchema }]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
