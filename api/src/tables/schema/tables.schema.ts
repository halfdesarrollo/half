import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrdersDocument = Tables & Document;
@Schema()
export class Tables {
    @Prop({ required: true })
    restaurantID: string;

    @Prop({ required: true })
    capacidad: number;

    @Prop({ required: true })
    ocupantesID: string[];

    @Prop({ enum: ['OCUPADA', 'DISPONIBLE'], default: 'DISPONIBLE' })
    state: string;
}
export const TablesSchema = SchemaFactory.createForClass(Tables);
