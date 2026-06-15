// BEGIN
<<<<<<< HEAD
export default function is({ name, state, website }, { name: name2, state: state2, website: website2 }) {
  return name === name2 && state === state2 && website === website2;
}
=======
export default function is(company1, company2){
    const keys = ['name', 'state', 'website'];
    for (const key of keys) {
      if (company1[key] !== company2[key]) {
        return false;
      }
    }
    return true;
  };
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END