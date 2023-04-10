import * as yup from 'yup';

// validamos que el campo data no se encuentre vacio y que sea un string
export const searchValidationSchema = yup.object().shape({
  data: yup.string().required('El campo es requerido'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email is not Valid').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is Required0'),
  email: yup.string().email('Email is not Valid').required('Email is Required'),
  password: yup.string().required('Password is Required'),
});
