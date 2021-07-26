import { getPropertyList } from './property-list.api';
import { getSaleTypeList, getProvinceList } from '../../common/api/api';
import { mapPropertyListFromApiToVM, mapFilterToQueryParams } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list-constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers/element.helpers';

Promise.all([getPropertyList(), getSaleTypeList(), getProvinceList()])
  .then(([propertyList, saleTypeList, provinceList]) => {
    loadPropertyList(propertyList);
    setOptions(saleTypeList, 'select-saleTypeId', '¿Qué venta?');
    setOptions(provinceList, 'select-provinceId', '¿Dónde?');
    setOptions(roomOptions, 'select-minRooms', '¿Habitaciones?');
    setOptions(bathroomOptions, 'select-minBathrooms', '¿Cuartos de baño?');
    setOptions(minPriceOptions, 'select-minPrice', 'Min(EUR)');
    setOptions(maxPriceOptions, 'select-maxPrice', 'Max(EUR)');
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

const onUpdateFields = (objectFilter) => {
  Object.entries(objectFilter).forEach(([key]) =>
    onUpdateField(`select-${key}`, (event) => {
      const value = event.target.value;

      filter = {
        ...filter,
        [key]: value
      }
    })
  );
}

onUpdateFields(filter);

onSubmitForm('search-button', () => {
  const queryParams = mapFilterToQueryParams(filter);

  getPropertyList(queryParams).then(propertyList => {
    clearPropertyRows();
    loadPropertyList(propertyList);
  });
});
