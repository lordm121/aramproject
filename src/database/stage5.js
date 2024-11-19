const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema(
  {
    sunday:{
    Class: { type: String, required: true },
      Subject: {
        type: String,
        required: true,
      },
      teachername: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      room: {
        type: String,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Main = mongoose.model("Stage5", mainSchema);

module.exports = Main;
