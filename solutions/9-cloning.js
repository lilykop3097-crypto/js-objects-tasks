// BEGIN
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
// END
