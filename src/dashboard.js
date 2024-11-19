const url = require("url");

require("colors");
const path = require("path");
const fs = require("fs");

const express = require("express");

const session = require("express-session");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");

const app = express();
///const RedisStore = require('connect-redis')(session);
///const redisClient = require('redis').createClient();
//const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");
module.exports = async () => {
    var minifyHTML = require("express-minify-html-terser");
    app.use(
      minifyHTML({
        override: true,
        exception_url: false,
        htmlMinifier: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
        },
      })
    );
  
    
    app.engine("ejs", ejs.renderFile);
  
    app.set("views", path.join(__dirname, "/views"));
    app.use(express.static(path.join(__dirname, "/public")));
  
    app.set("view engine", "ejs");
    app.use(bodyParser.json());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(cookieParser());
  
    const templateDir = path.resolve(`${process.cwd()}${path.sep}src/views`);
  
    app.use(
      "/img",
      express.static(path.resolve(`${templateDir}${path.sep}public/img`))
    );
  
  app.use(
    "/ads.txt",
    express.static(path.resolve(`${templateDir}${path.sep}public/ads.txt`))
  );
    app.use(
      "/img",
      express.static(path.resolve(`${templateDir}${path.sep}public/ads.txt`))
    );
    app.use(
      "/css",
      express.static(path.resolve(`${templateDir}${path.sep}public/css`))
    );
  
    app.use(
      "/js",
      express.static(path.resolve(`${templateDir}${path.sep}public/js`))
    );
  
    app.use(
      "/uploads",
      express.static(path.resolve(`${templateDir}${path.sep}public/uploads`))
    );
    const http = require("http").createServer(app);

  http.listen(3000, () => {
    console.log(`Website running on 3000 port.`);
  });
  app.use("/", require("./routes/index.js"));

}