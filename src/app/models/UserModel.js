const users = [];

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

