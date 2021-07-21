export const mapPropertiesListFromApiToVM = (propertiesList) => {
  return propertiesList.map(property => (
    mapPropertyFromApiToVM(property)
  ))
}

const mapPropertyFromApiToVM = (property) => {
  return {
    ...property,
    rooms: `${property.rooms} habitaciones`,
    squareMeter: `${property.squareMeter}m2`,
    price: `${property.price} €`,
    notes: `${property.notes.slice(0, 240)}...`,
    image: property.images[0]
  }
}
