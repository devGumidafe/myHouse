import { getPropertyList, getSaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApiToVM } from './property-list.mappers';
import { addPropertyRows, setOptions } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list-constants';

getPropertyList().then(propertyList => {
  const viewModelPropertyList = mapPropertyListFromApiToVM(propertyList);
  addPropertyRows(viewModelPropertyList);
});

getSaleTypeList().then(saleTypeList => {
  setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?')
});

getProvinceList().then(provinceList => {
  setOptions(provinceList, 'select-province', '¿Dónde?')
});

setOptions(roomOptions, 'select-room', '¿Habitaciones?');

setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');

setOptions(minPriceOptions, 'select-min-price', 'Min(EUR)');

setOptions(maxPriceOptions, 'select-max-price', 'Max(EUR)');
