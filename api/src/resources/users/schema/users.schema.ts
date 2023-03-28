import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document<Users>;

@Schema()
export class Users {

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    telefono: string;

    @Prop({ default: 'User' })
    rol: string;

    @Prop({ default: [] })
    contactos: Array<String>;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
