import { setPropertyValues } from './property-detail.helpers';
import { getProperty, getEquipments } from './property-detail.api';
import { mapPropertyDetailToApiFromVM } from './property-detail.mappers'
import { history } from '../../core/router/history';

const { id: propertyId } = history.getParams();

Promise.all([getProperty(propertyId), getEquipments()])
  .then(([property, equimentList]) => {
    loadProperty(property, equimentList);
  })

const loadProperty = (property, equimentList) => {
  const viewModelPropertyDetail = mapPropertyDetailToApiFromVM(property[0], equimentList);
  setPropertyValues(viewModelPropertyDetail);
}


