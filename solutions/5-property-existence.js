// BEGIN
import _ from 'lodash';

const countWords = (sentence) => {
  const result = {};
  const words = _.words(sentence);

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    result[lowerWord] = (result[lowerWord] || 0) + 1;
  }

  return result;
};

export default countWords;

// END