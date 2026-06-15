// BEGIN
export default function getSortedNames(users) {
<<<<<<< HEAD
    const names = users.map(({ name }) => name);
    return names.sort();
  }
=======
    const userArray = new Array()

    users.forEach(element => {
        const {name:username} = element
        userArray.push(username)
    });

    return userArray.sort()
}
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END