import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.email,
        message: 'Email no válido'
      },
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    message: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 5 },
        message: 'El tamaño mínimo son {{length}} caracteres'
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 500 },
        message: 'El tamaño máximo son {{length}} caracteres'
      }
    ],
  }
}

export const formValidation = createFormValidation(validationSchema);

