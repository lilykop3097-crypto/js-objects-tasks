// BEGIN
<<<<<<< HEAD
// fill.js
export default function fill(target, allowedKeys, source) {
    if (allowedKeys.length === 0) {
      Object.assign(target, source);
    } else {
      allowedKeys.forEach(key => {
        if (key in source) {            
          target[key] = source[key];
        }
      });
    }
  }
=======
export default function fill(thisObject,arr,otherObject) {
    if (arr.length === 0) {
        for (const key in otherObject) {
            thisObject[key] = otherObject[key]
        }
    }

    arr.forEach((element)=>{thisObject[element] = otherObject[element]})
}
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END