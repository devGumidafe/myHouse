import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
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
        message: 'Campo requerido'
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
        customArgs: { pattern: /^(6|7|8|9)\d{9}$/ },
        message: 'Teléfono no válido'
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
    saleTypes: [
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
    province: [
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
        message: 'Metros cuadrados no válidos'
      }
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido'
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^[0-9]*$/ },
        message: 'Habitación no válida'
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
        message: 'Baño no válido'
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
    newFeature: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }
    ],
    equipments: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }
    ],
    images: [{
      validator: Validators.required,
      message: 'Campo requerido',
    }
    ],
  }
}

export const formValidation = createFormValidation(validationSchema);

