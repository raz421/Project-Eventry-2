import { replaceById, replaceEventid } from "@/utills";

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
  const event = await eventModel.findById(id).lean();
  return replaceById(event);
};
export { allEvents, eventById };
