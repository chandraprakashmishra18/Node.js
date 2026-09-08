const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/user.json");

const getAll = () => {
  const data = fs.readFileSync(userFilePath, "utf-8");
  return JSON.parse(data);
};

const getById = (id) => {
  const users = getAll();
  return users.find((user) => user.id === id);
};

const save = (newUser) => {
  try {
    const users = getAll();
    users.push(newUser);
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), "utf-8");
    return newUser;
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
};

const update = (id, updatedData) => {
  try {
    const users = getAll();
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) return null;

    users[index] = { ...users[index], ...updatedData, id };
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), "utf-8");
    return users[index];
  } catch (err) {
    console.error("Error updating user:", err);
    return null;
  }
};

const deleteUser = (id) => {
  try {
    const users = getAll();
    const index = users.findIndex((user) => user.id === id);

    if (index === -1) return false;

    users.splice(index, 1);
    fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error deleting user:", err);
    return false;
  }
};

module.exports = {
    getAll,
    getById,
    save,
    update,
    delete :deleteUser
}
