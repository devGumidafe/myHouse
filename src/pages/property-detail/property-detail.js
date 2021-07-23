import { setPropertyValues } from './property-detail.helpers';
import { getProperty, insertContact } from './property-detail.api';
import { getEquipmentList } from '../../common/api/api'
import { mapPropertyDetailToApiFromVM } from './property-detail.mappers';
import { formValidation } from './property-detail.validations';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers/element.helpers';
import { history } from '../../core/router/history';

const { id: propertyId } = history.getParams();

Promise.all([getProperty(propertyId), getEquipmentList()])
  .then(([property, equimentList]) => {
    loadProperty(property, equimentList);
  })

const loadProperty = (property, equimentList) => {
  const viewModelPropertyDetail = mapPropertyDetailToApiFromVM(property[0], equimentList);
  setPropertyValues(viewModelPropertyDetail);
}

// Formulario de contacto
let contact = {
  email: '',
  message: ''
}

onUpdateField('email', ({ target }) => {
  contact = {
    ...contact,
    email: target.value
  };

  formValidation.validateField('email', contact.email).then(result => {
    onSetError('email', result);
  });
});

onUpdateField('message', ({ target }) => {
  contact = {
    ...contact,
    message: target.value
  };

  formValidation.validateField('message', contact.message).then(result => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {
      insertContact(contact).then(resutl => {
        alert('Mensaje enviado con éxito');
        onSetValues(contact = { email: '', message: '' });
      })
    }
  });
});
