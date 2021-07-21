import { getPropertyList } from './property-list.api';

getPropertyList().then(propertyList => {
  console.log(propertyList)
})

