import { getEquipmentList, getProvinceList, getSaleTypeList } from '../../common/api/api';
import { setCheckboxList, setOptionList } from './upload-property.helpers';
import { formValidation } from './upload-property.validations';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers/element.helpers';
import { history, routes } from '../../core/router';

Promise.all([getEquipmentList(), getProvinceList(), getSaleTypeList()])
  .then(([equipmentList, provinceList, saleTypeList]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setOptionList(provinceList, 'province');
    setCheckboxList(equipmentList, 'equipments');
  });

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  newFeature: [],
  mainFeatures: [],
  equipments: [],
  images: []
}

const onUpdateFields = (property) => {
  Object.entries(property).forEach(([key]) =>
    onUpdateField(key, ({ target }) => {
      newProperty = {
        ...newProperty,
        [key]: target.value
      };

      formValidation.validateField([key], newProperty[key]).then(result => {
        onSetError([key], result);
      });
    })
  );
}

onUpdateFields(newProperty);

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {

      console.log({newProperty});
     /*  insertProperty(newProperty).then(result => {
        history.push(routes.propertyList);
      }) */
    }
  });
});
