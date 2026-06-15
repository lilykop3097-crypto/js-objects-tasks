// BEGIN
<<<<<<< HEAD
export default function get(object, arr) {
  let currentObject = object;

  for (const key of arr) {
    if (currentObject !== null && typeof currentObject === 'object' && Object.hasOwn(currentObject, key)) {
      currentObject = currentObject[key];
    } else {
      return null;
    }
  }

  return currentObject;
=======
export default function get(object,arr) {
  let currentObject = object

  for (const key of arr) {
    if (typeof currentObject === 'object' & Object.hasOwn(currentObject,key)) {
      currentObject = currentObject[key]
    }
    else{
      return null
    }
  }

  return currentObject
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
}
// END



