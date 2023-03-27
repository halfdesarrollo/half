import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import mongoose, { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;
@Schema()
export class Users {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop()
  phoneNumber: number;
  @Prop({ required: true })
  password: string;
  @Prop()
  contacts: string[];
  @Prop({ enum: ['ADMIN', 'MOZO', 'CLIENTE'], default: 'CLIENTE' })
  rol: string;
}
export const UserSchema = SchemaFactory.createForClass(Users);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  }
});
