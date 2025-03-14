"use server";

const { createUser, findUser } = require("@/db/queries");

export const registerAction = async (fromData) => {
  const userData = {};
  userData.name = fromData.get("name");
  userData.email = fromData.get("email");
  userData.password = fromData.get("password");
  userData.phone = fromData.get("phone");
  userData.bio = fromData.get("bio");
  await createUser(userData);
};
export const loginAction = async (fromData) => {
  const userInfo = {};
  userInfo.email = fromData.get("email");
  userInfo.password = fromData.get("password");
  await findUser(fromData);
};
