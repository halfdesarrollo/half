import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { loginUser, registerUser } from './userSlice';

const URL_LOGIN =
  'https://production-nestjs-back-production.up.railway.app/auth/login';
const URL_REGISTER =
  'https://production-nestjs-back-production.up.railway.app/auth/register';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(URL_LOGIN, {
      email: email,
      password: password,
    });
    const userLogged = jwt_decode(response.data.access_token);
    dispatch(
      loginUser({ user: { userLogged }, token: response.data.access_token }),
    );
    return { success: true };
  } catch (error) {
    if (error.response) {
      console.log('Error de respuesta:', error.response.data);
      console.log('Código de estado:', error.response.status);
    } else if (error.request) {
      console.log('No se recibió respuesta:', error.request);
    } else {
      console.log('Error:', error.message);
    }
    console.log('Configuración del error:', error.config);
    return { success: false, error: error };
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    console.log('dispatch', name, email, password);
    const response = await axios.post(URL_REGISTER, {
      name,
      email,
      password,
    });
    const userRegistered = jwt_decode(response.data.access_token);
    dispatch(
      registerUser({
        user: { userRegistered },
        token: response.data.access_token,
      }),
    );
    return { success: true };
  } catch (error) {
    if (error.response) {
      console.log('Error de respuesta:', error.response.data);
      console.log('Código de estado:', error.response.status);
    } else if (error.request) {
      console.log('No se recibió respuesta:', error.request);
    } else {
      console.log('Error:', error.message);
    }
    console.log('Configuración del error:', error.config);
    return { success: false, error: error };
  }
};
