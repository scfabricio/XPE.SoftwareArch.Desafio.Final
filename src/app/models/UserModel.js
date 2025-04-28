let users = [];

export function createUser({ name, email, password }) {
  const user = { id: users.length + 1, name, email, password };
  users.push(user);
  return user;
}

export function getAllUsers() {
  return users;
}

export function getUserById(id) {
  return users.find(user => user.id === Number(id));
}

export function updateUser(id, name) {
  const idx = users.findIndex(user => user.id === Number(id));
  let user = users[idx];
  user.name = name;
  users.splice(idx, 1, user);
  return user;
}

export function removeUser(id) {
  const idx = users.findIndex(user => user.id === Number(id));
  users = users.slice(1, idx);
}


