<<<<<<< HEAD
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
=======
// import _, { uniq } from 'lodash';

// import { uniq } from "lodash";

// import { toLower } from "lodash"

// BEGIN
export default function countWords(text) {
    if (text.length === 0) {
        return {}
    }
    let uniqueWords = new Set(text.split(' ').map(n => n.toLowerCase()))

    let resultObject = {}
    for (const word of uniqueWords) {
        let counter = 0
        for (const iterator of text.split(' ').map(n => n.toLowerCase())) {
            if (word === iterator) {
                counter++
            }
        }
        resultObject[word] = counter
    }

    return resultObject
}

>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635

// END