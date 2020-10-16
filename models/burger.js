const orm = require("../config/orm.js");

const cat = {
    all: (cb) => {
      orm.selectAll("cats", (res) => {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: (newCat, cb) => {
      orm.insertOne("cats", newCat, (res) => {
        cb(res);
      });
    },
    update: (catData, criteria, cb) => {
      orm.updateOne("cats", catData, criteria, (res) => {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = cat;
  