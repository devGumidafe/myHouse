import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Email no válido'
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 4 },
        message: 'El tamaño mínimo son {{length}} caracteres'
      }
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Email no válido'
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },
        message: 'El tamaño mínimo son {{length}} caracteres'
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 500 },
        message: 'El tamaño máximo son {{length}} caracteres'
      }
    ],
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
    phone: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(7|8|9)\d{9}$/ }
      }
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[0-9]*$/ },
        message: 'Precio no válido'
      }
    ],
    saleTypeIds: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    address: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },
        message: 'El tamaño mínimo son {{length}} caracteres'
      },
      {
        validator: Validators.maxLength,
        customArgs: { length: 200 },
        message: 'El tamaño máximo son {{length}} caracteres'
      }
    ],
    city: [
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
        customArgs: { length: 100 },
        message: 'El tamaño máximo son {{length}} caracteres'
      }
    ],
    provinceId: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      }
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[0-9]*$/ },
        message: 'Valor no válido'
      }
    ],
    room: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[0-9]*$/ },
        message: 'Valor no válido'
      }
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[0-9]*$/ },
        message: 'Valor no válido'
      }
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/ },
        message: 'Url no válida'
      }
    ],
    mainFeatures: [{
      validator: Validators.array,
      customArgs: {
        minLength: 1,
        maxLength: 10
      },
      message: 'Introduce al menos una característica',
    }],
    equipmentIds: [{
      validator: Validators.required,
      message: 'Campo requerido',
    },
    {
      validator: Validators.array,
      customArgs: {
        minLength: 1
      },
      message: 'Introduzca al menos un equipamiento',
    }
    ],
    images: [{
      validator: Validators.required,
      message: 'Campo requerido',
    },
    {
      validator: Validators.array,
      customArgs: {
        minLength: 1
      },
      message: 'Adjunte al menos una imagen',
    }
    ],
  }
}

export const formValidation = createFormValidation(validationSchema);

