import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import axios from "axios";

const initialState = {
  user: {},
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.user;
    },

    logoutUser: (state, action) => {
      state.user = {};
    },
  },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(URL_LOGIN, {
      email: email,
      password: password,
    });
    const userLogged = jwt_decode(response.data.access_token);
    dispatch(
      loginUser({ user: { userLogged }, token: response.data.access_token })
    );
  } catch (error) {
    if (error.response) {
      console.log("Error de respuesta:", error.response.data);
      console.log("Código de estado:", error.response.status);
    } else if (error.request) {
      console.log("No se recibió respuesta:", error.request);
    } else {
      console.log("Error:", error.message);
    }
    console.log("Configuración del error:", error.config);
  }
};

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
