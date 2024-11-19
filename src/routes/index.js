const app = require("express").Router();
const moment = require("moment");

console.log(":index ");


app.get("/", async (req, res, next) => {
  try {

      return res.render("index.ejs", {
        req: req,
      });
    
      } catch (error) {
      next(error);
    }
    });
    module.exports = app;