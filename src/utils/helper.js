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
}
