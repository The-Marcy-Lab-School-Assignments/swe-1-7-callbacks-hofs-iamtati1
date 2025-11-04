const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) {
      return false;
    }
  }
  return true;
};

const sortUsersBy = (users, sortingCallback) => {
  return [...users].sort(sortingCallback);
};

const logEachName = (names) => {
  return names.forEach(console.log);
};

const logEachUserBio = (users) => {
  users.forEach((user) => console.log(user.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
