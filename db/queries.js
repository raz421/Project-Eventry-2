import { userModel } from "@/models/user-model";
import { replaceById, replaceEventid } from "@/utills";
import { redirect } from "next/navigation";

const { eventModel } = require("@/models/event-models");

const allEvents = async () => {
  try {
    const events = await eventModel.find().lean();
    return replaceEventid(events);
  } catch (e) {
    console.error(e);
  }
};
const eventById = async (id) => {
  try {
    const event = await eventModel.findById(id).lean();
    return replaceById(event);
  } catch (e) {
    console.error(e);
  }
};
const createUser = async (userdata) => {
  try {
    const user = await userModel.create(userdata).lean();
    // console.log(user);
  } catch (e) {
    console.error(e);
  }
  redirect("/login");
};

const findUser = async (userInfo) => {
  try {
    const found = await userModel.findOne(userInfo);
  } catch (e) {
    console.error(`user not found in this ${userInfo.email}`);
  }
  redirect("/");
};

export { allEvents, createUser, eventById, findUser };
