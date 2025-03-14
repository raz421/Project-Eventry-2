const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  details: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  imagUrl: {
    type: String,
    require: true,
  },
  interested_ids: {
    type: Array,
    require: false,
  },
  going_ids: {
    type: Array,
    require: false,
  },
  swags: {
    type: Array,
    require: false,
  },
});
export const eventModel =
  mongoose.models.events || mongoose.model("events", schema);
