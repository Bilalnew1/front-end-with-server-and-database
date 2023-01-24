const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://student:student@cluster0.8e47lux.mongodb.net/test",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("MongoDB connect ho gaya.");
    } else {
      console.log("Error ha raha ha db ma : " + err);
    }
  }
);

require("./employee.model");
