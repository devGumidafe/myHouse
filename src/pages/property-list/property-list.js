import { getPropertyList, getSaleTypeList, getProvinceList } from './property-list.api';
import { mapPropertyListFromApiToVM, mapFilterToQueryParams } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list-constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers/element.helpers';

Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()])
  .then(([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-sale-type', '¿Qué venta?');
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-min-price', 'Min(EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max(EUR)');
  });

const loadPropertyList = (propertyList) => {
  const viewModelPropertyList = mapPropertyListFromApiToVM(propertyList);
  addPropertyRows(viewModelPropertyList);
}

let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms: '',
  minPrice: '',
  maxPrice: ''
}

onUpdateField('select-sale-type', ({ target }) => {
  filter = {
    ...filter,
    saleTypeId: target.value
  };
});

onUpdateField('select-province', ({ target }) => {
  filter = {
    ...filter,
    provinceId: target.value
  };
});

onUpdateField('select-room', ({ target }) => {
  filter = {
    ...filter,
    minRooms: target.value
  };
});

onUpdateField('select-bathroom', ({ target }) => {
  filter = {
    ...filter,
    minBathrooms: target.value
  };
});

onUpdateField('select-min-price', ({ target }) => {
  filter = {
    ...filter,
    minPrice: target.value
  };
});

onUpdateField('select-max-price', ({ target }) => {
  filter = {
    ...filter,
    maxPrice: target.value
  };
});

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter);

  getPropertyList(queryParams).then(propertyList => {
    clearPropertyRows();
    loadPropertyList(propertyList);
  });
});
