export const mapUploadPropertyToVMFromApi = (property, propList) => {
  return {
    id: '',
    title: property.title,
    notes: property.notes,
    email: property.email,
    phone: property.phone,
    price: property.price,
    saleTypeIds: propList.saleTypes,
    address: property.address,
    city: property.city,
    provinceId: property.province,
    squareMeter: property.squareMeter,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: propList.mainFeatures,
    equipmentIds: propList.equipments,
    images: propList.images
  }
};
