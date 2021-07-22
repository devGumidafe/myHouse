import { setPropertyValues } from './property-detail.helpers';
import {getProperty} from './property-detail.api';
import {mapPropertyDetailToApiFromVM} from './property-detail.mappers'
import {history} from '../../core/router/history';

const {id: propertyId} = history.getParams();

getProperty(propertyId).then(property => {
  const viewModelPropertyDetail = mapPropertyDetailToApiFromVM(property[0]);

  setPropertyValues(viewModelPropertyDetail);
});



