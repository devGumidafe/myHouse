export const mapPropertyDetailToApiFromVM = (property) => {
  return {
    ...property,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    price: `${property.price.toLocaleString()} €`,
    equipments: property.equipmentIds,
    mainImage: property.images[0]
  }
};

const getRoomWord = (rooms) => (rooms > 1) ? 'habitaciones' : 'habitación';
const getBathroomWord = (bathrooms) => (bathrooms > 1) ? 'baños' : 'baño';
