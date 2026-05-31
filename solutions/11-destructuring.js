// BEGIN
export default function getSortedNames(users) {
    const names = users.map(({ name }) => name);
    return names.sort();
  }
// END