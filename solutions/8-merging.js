// BEGIN
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
// END