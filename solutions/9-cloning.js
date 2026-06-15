// BEGIN
<<<<<<< HEAD
export default function cloneShallow(obj) {
        if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    const result = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = obj[key];
      }
    }
    return result;
  }
=======
export default function cloneShallow(object) {
    const resultObject = new Object()

    for (const key in object) {
        resultObject[key] = object[key]
    }

    return resultObject
}
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END
