export const mapPropertiesListFromApiToVM = (propertiesList) => {
  return propertiesList.map(property => (
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
