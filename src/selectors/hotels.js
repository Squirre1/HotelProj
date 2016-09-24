export const HotelCardContainerSelector = state => {
  const { hotels } = state.entities;


  return {
    hotels,
  };
};

export const HotelsListContainerSelector = state => {
  const { hotels } = state.entities;


  return {
    hotels: Object.keys(hotels).map(id => hotels[id]),
  };
};
