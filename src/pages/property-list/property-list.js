import { getPropertyList } from './property-list.api';
import { mapPropertiesListFromApiToVM } from './property-list.mappers';
/* import { addPropertyRows } from './property-list.helpers'; */

getPropertyList().then(propertyList => {
  const apiPropertyList = mapPropertiesListFromApiToVM(propertyList);

  console.log(apiPropertyList)
  /* addPropertyRows(apiPropertyList); */
})

