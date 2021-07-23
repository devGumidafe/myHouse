import { getEquipmentList, getProvinceList, getSaleTypeList } from '../../common/api/api';
import { setCheckboxList, setOptionList } from './upload-property.helpers';
import { formValidation } from './upload-property.validations';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers/element.helpers';

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
  saleTypeIds: [],
  address: '',
  city: '',
  provinceId: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  newFeature: [],
  mainFeatures: [],
  equipmentIds: [],
  images: []
}

onUpdateField('price', ({ target }) => {
  newProperty = {
    ...newProperty,
    price: target.value
  };

  formValidation.validateField('price', newProperty.price).then(result => {
    onSetError('price', result);
  });
});
