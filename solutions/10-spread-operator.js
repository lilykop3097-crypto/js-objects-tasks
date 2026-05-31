// BEGIN
export default function make(name, additionalProperties = {}) {
    return {
      name,
      state: 'moderating',
      createdAt: Date.now(),
      ...additionalProperties,
    };
  }
// END

