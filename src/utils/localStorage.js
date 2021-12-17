const setStorageItems = (items) => {
  // const oldItems = JSON.parse(localStorage.getItem("cartoons")) || [];
  // const newItems = [...oldItems, items];
  const stringifiedNewItems = JSON.stringify(items);
  localStorage.setItem("picts", stringifiedNewItems);
};
const getStorageItems = () => {
  return JSON.parse(localStorage.getItem("picts")) || [];
};

export { setStorageItems, getStorageItems };