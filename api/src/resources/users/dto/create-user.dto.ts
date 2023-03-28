import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {

    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    telefono: string;

    @IsNotEmpty()
    rol: string;

    @IsNotEmpty()
    contactos: Array<String>;
}
