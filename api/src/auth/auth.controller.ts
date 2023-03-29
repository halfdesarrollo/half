import { Body, Controller, Post, UseGuards, Req } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { LoginDTO } from "../users/dto/login.dto";
import { RegisterDTO } from "src/users/dto/register.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Post("register")
  async register(@Body() registerDTO: RegisterDTO) {
    return await this.userService.create(registerDTO);
  }

  @Post("login")
  async login(@Body() loginDTO: LoginDTO) {
    console.log("entada del usuario", loginDTO);
    const a = await this.authService.login(loginDTO);
    return a;
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("Protected")
  async protectedRoute(@Req() req) {
    return req.user;
  }
}
