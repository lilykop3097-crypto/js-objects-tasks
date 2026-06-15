// BEGIN
<<<<<<< HEAD
export default function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
=======
export default function pick(obj, keys){
    const result = {};
    for (const key of keys) {
      for (const iterator in obj) {
        if (iterator === key) {
            result[key] = obj[key]
        }
      }
    }
    return result;
  };
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635


// END