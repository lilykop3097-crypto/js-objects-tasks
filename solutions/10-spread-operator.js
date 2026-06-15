// BEGIN
<<<<<<< HEAD
export default function make(name, additionalProperties = {}) {
    return {
      name,
      state: 'moderating',
      createdAt: Date.now(),
      ...additionalProperties,
    };
  }
=======
export default function make(companyName,additionalProperties = undefined) {
    if (additionalProperties !== undefined) {
        return {
            name : companyName,
            state: 'moderating',
            createdAt: Date.now(),
            ...additionalProperties
        }
        
    }
    return {
        name: companyName,
        state: 'moderating',
        createdAt: Date.now(),
    }
}
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END

