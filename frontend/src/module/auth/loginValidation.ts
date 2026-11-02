import * as yup from 'yup';

export type LoginFormValues = {
  email: string;
  password: string;
};

export const loginInitialValues: LoginFormValues = {
  email: '',
  password: '',
};

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Ingresa un correo válido')
    .required('El correo es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria'),
});
