import * as yup from 'yup'

// validamos que el campo data no se encuentre vacio y que sea un string
export const searchValidationSchema = yup.object().shape({
  data: yup.string().required('El campo es requerido')
})