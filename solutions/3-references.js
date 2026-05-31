// BEGIN
export default function is({ name, state, website }, { name: name2, state: state2, website: website2 }) {
  return name === name2 && state === state2 && website === website2;
}
// END