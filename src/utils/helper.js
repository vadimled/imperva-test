export const updateObjectInArray = (array, key, obj) => {
  let isNew = false;
  const res = array.map(item => {
    if (Object.keys(item)[0] === key) {
      item[key].push(obj)
      isNew = true;
    }
    return item
  })
  if (!isNew) {
    res.push({[key]: [obj]})
  }
  return res;
};

export const deleteObjectFromArray = (array, data) => {
  const {text, selectedKey} = data;
  return array.map(item => {
    if (Object.keys(item)[0] === selectedKey) {
      const ind = item[selectedKey].findIndex(item => item.text === text);
      if (ind > -1) {
        item[selectedKey].splice(ind, 1);
      }
      return item;
    }
    return item
  });
}
