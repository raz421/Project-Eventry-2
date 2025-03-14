export const replaceEventid = (arr) => {
  const items = arr
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return items;
};
export const replaceById = (singleEvent) => {
  const { _id, ...rest } = { ...singleEvent, id: singleEvent._id.toString() };
  return rest;
};
