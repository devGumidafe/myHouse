export const mapPropertyListFromApiToVM = (propertyList) => {
  return propertyList.map(property => (
    mapPropertyFromApiToVM(property)
  ))
}

const mapPropertyFromApiToVM = (property) => {
  return {
    ...property,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    price: `${property.price.toLocaleString()} €`,
    notes: `${property.notes.slice(0, 240)}...`,
    image: Array.isArray(property.images)
      ? property.images[0]
      : ''
  }
}

const getRoomWord = (rooms) => (rooms > 1) ? 'habitaciones' : 'habitación';

export const mapFilterToQueryParams = (filter) => {
  const { saleTypeId, provinceId, minRooms, minBathrooms, minPrice, maxPrice } = filter;
  let queryParams = '';

  if (saleTypeId) {
    queryParams += `saleTypeIds_like=${saleTypeId}&`;
  }

  if (provinceId) {
    queryParams += `provinceId=${provinceId}&`;
  }

  if (minRooms) {
    queryParams += `rooms_gte=${minRooms}&`;
  }

  if (minBathrooms) {
    queryParams += `bathrooms_gte=${minBathrooms}&`;
  }

  if (minPrice) {
    queryParams += `price_gte=${minPrice}&`;
  }

  if (maxPrice) {
    queryParams += `price_lte=${maxPrice}&`;
  }

  return queryParams.slice(0, -1);
}
