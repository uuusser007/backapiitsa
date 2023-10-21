const UsersItsa = require("../models/users.model");

const findAllUsers = async () => {
  const users = await UsersItsa.findAll();
  return users;
};

const createUser = async (userObj) => {
  const newUser = await UsersItsa.create({
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
  });
  return newUser;
};

const deleteUser = async (id) => {
  const user = await UsersItsa.destroy({
    where: {
      id: id,
    },
  });
  return user; // 1 || 0
};


module.exports={
  findAllUsers,
  createUser,
  deleteUser
}