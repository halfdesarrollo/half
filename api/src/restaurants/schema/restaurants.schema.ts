import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrdersDocument = Restaurants & Document;
@Schema()
export class Restaurants {
    @Prop({ required: true })
    Nombre: string;

    @Prop({ required: true })
    Direccion: string;

    @Prop({ required: true })
    Telefono: string;

    @Prop({ required: true })
    Ciudad: string;

    @Prop({ required: true })
    Email: string;

    @Prop({ required: true })
    Horario: string;

    @Prop({ required: true })
    Cantidad_mesas: number;

    @Prop({ required: true })
    MesasID: string[];

}
export const RestaurantsSchema = SchemaFactory.createForClass(Restaurants);
