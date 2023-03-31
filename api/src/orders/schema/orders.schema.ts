import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrdersDocument = Orders & Document;
@Schema()
export class Orders {
    @Prop({ required: true })
    userID: string;

    @Prop({ required: true })
    mesaID: string;

    @Prop({ required: true })
    restaurantID: string;

    @Prop({ required: true })
    menusID: string[];

    @Prop({ enum: ['RECIBIDO', 'PREPARANDO', 'ENTREGADO'], default: 'RECIBIDO' })
    state: string;
}
export const OrdersSchema = SchemaFactory.createForClass(Orders);
