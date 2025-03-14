const { Schema, default: mongoose } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  phone: {
    type: String,
    require: true,
  },

  bio: {
    type: String,
    require: false,
  },
});
export const userModel =
  mongoose.models.users || mongoose.model("users", schema);
