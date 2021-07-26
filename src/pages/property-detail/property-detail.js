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

const onUpdateFields = (objectContact) => {
  Object.entries(objectContact).forEach(([key]) =>
    onUpdateField(key, (event) => {
      const value = event.target.value;

      contact = {
        ...contact,
        [key]: value
      };

      formValidation.validateField(key, contact[key]).then(result => {
        onSetError(key, result);
      });
    })
  );
}

onUpdateFields(contact);

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {
      insertContact(contact).then(result => {
        alert('Mensaje enviado con éxito');
        onSetValues(contact = { email: '', message: '' });
      })
    }
  });
});
