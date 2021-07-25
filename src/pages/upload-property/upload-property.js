import { getEquipmentList, getProvinceList, getSaleTypeList } from '../../common/api/api';
import { setCheckboxList, setOptionList, onAddImage, onAddFeature, onRemoveFeature, formatDeleteFeatureButtonId } from './upload-property.helpers';
import { formValidation } from './upload-property.validations';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers/element.helpers';
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
  saleTypes: '',
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  newFeature: '',
  equipments: '',
  images: ''
}

const propList = {
  saleTypes: [],
  mainFeatures: [],
  equipments: [],
  images: []
}

const onUpdateFields = (property) => {
  Object.entries(property).forEach(([key]) =>
    onUpdateField(key, (event) => {
      const value = event.target.value;

      newProperty = {
        ...newProperty,
        [key]: value
      };

      formValidation.validateField(key, newProperty[key]).then(result => {
        onSetError(key, result);

        if (result.succeeded) {
          if (
            key === 'saleTypes' ||
            key === 'equipments' ||
            key === 'images'
          ) {
            propList[key].push(value);

            onAddFile('add-image', value => {
              onAddImage(value);
            });
          }
        }
      });
    })
  );
}

onUpdateFields(newProperty);

onSubmitForm('insert-feature-button', () => {
  formValidation.validateField('newFeature', newProperty.newFeature).then(result => {
    onSetError('newFeature', result);

    if (result.succeeded) {
      onAddFeature(newProperty.newFeature);
      propList.mainFeatures.push(newProperty.newFeature);

      propList.mainFeatures.map(myFeature => {
        onSubmitForm(formatDeleteFeatureButtonId(myFeature), () => {
          onRemoveFeature(myFeature);

          let i = propList.mainFeatures.indexOf(myFeature);
          propList.mainFeatures.splice(i, 1);
        });
      });
    }
  });
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then(result => {
    onSetFormErrors(result);

    console.log({ newProperty });
    console.log({ propList });
    if (result.succeeded) {

      console.log({ newProperty });
      /*  insertProperty(newProperty).then(result => {
         history.push(routes.propertyList);
       }) */
    }
  });
});
