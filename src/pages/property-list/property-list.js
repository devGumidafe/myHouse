import { getPropertyList, getSaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApiToVM } from './property-list.mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';

getPropertyList().then(propertyList => {
  const viewModelPropertyList = mapPropertyListFromApiToVM(propertyList);
  addPropertyRows(viewModelPropertyList);
})

getSaleTypeList().then(saleTypeList => {
  setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?')
})

getProvinceList().then(provinceList => {
  setOptions(provinceList, 'select-province', '¿Dónde?')
})
