import config from '../../../config/ConfigEntorno/config';
import { IUser } from '../../../Models/user';
import jwt, { sign } from 'jsonwebtoken';

function createToken(user: IUser) {
  const accessToken = sign({
    id: user.id
  }, config.jwtSecret, {expiresIn: 86400});

  const refreshToken = sign({
    id: user.id
  }, "refresh_secret", {expiresIn: '1w'});

  return { accessToken, refreshToken };
  }

  export default createToken;