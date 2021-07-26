import { getEquipmentList, getProvinceList, getSaleTypeList } from '../../common/api/api';
import { setCheckboxList, setOptionList, onAddImage, onAddFeature, onRemoveFeature, formatDeleteFeatureButtonId } from './upload-property.helpers';
import { formValidation } from './upload-property.validations';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onAddFile } from '../../common/helpers/element.helpers';
import { mapUploadPropertyToVMFromApi } from './upload-property.mappers';
import { insertProperty } from './upload-property.api';
import { history, routes } from '../../core/router';

Promise.all([getEquipmentList(), getProvinceList(), getSaleTypeList()])
  .then(([equipmentList, provinceList, saleTypeList]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setOptionList(provinceList, 'province');
    setCheckboxList(equipmentList, 'equipments');
  });

let uploadProperty = {
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

      uploadProperty = {
        ...uploadProperty,
        [key]: value
      };

      formValidation.validateField(key, uploadProperty[key]).then(result => {
        onSetError(key, result);

        if (result.succeeded) {
          if (key === 'saleTypes' || key === 'equipments') {
            propList[key].push(value);

          } else if (key === 'images') {
            onAddFile('add-image', value => {
              onAddImage(value);
              propList[key].push(value);
            });
          }
        }
      });
    })
  );
}

onUpdateFields(uploadProperty);

onSubmitForm('insert-feature-button', () => {
  formValidation.validateField('newFeature', uploadProperty.newFeature).then(result => {
    onSetError('newFeature', result);

    if (result.succeeded) {
      onAddFeature(uploadProperty.newFeature);
      propList.mainFeatures.push(uploadProperty.newFeature);

      propList.mainFeatures.map(feature => {
        onSubmitForm(formatDeleteFeatureButtonId(feature), () => {
          onRemoveFeature(feature);

          let i = propList.mainFeatures.indexOf(feature);
          propList.mainFeatures.splice(i, 1);
        });
      });
    }
  });
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(uploadProperty).then(result => {
    onSetFormErrors(result);

    if (result.succeeded) {
      const vmProperty = mapUploadPropertyToVMFromApi(uploadProperty, propList);

      insertProperty(vmProperty).then(result => {
        history.push(routes.propertyList);
      })
    }
  });
});
