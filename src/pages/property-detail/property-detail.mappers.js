export const mapPropertyDetailToApiFromVM = (property, equipmentList) => {
  return {
    ...property,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    price: `${property.price.toLocaleString()} €`,
    equipments: mapEquipments(property.equipmentIds, equipmentList),
    mainImage: Array.isArray(property.images)
      ? property.images[0]
      : ''
  }
};

const getRoomWord = (rooms) => (rooms > 1) ? 'habitaciones' : 'habitación';
const getBathroomWord = (bathrooms) => (bathrooms > 1) ? 'baños' : 'baño';

const mapEquipments = (equipmentIds, equipmentList) => {
  return equipmentIds.map(equipmentId => (
    equipmentList.find(({ id }) => id == equipmentId).name
  ))
}
