const mongoose = require("mongoose");
//mongoose.set("useNewUrlParser", true);

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(
        "mongodb+srv://mohamedmetwally:3bdallahm7mdmetwally@cluster0.uwzrkzf.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("database connected successfully");
      })
      .catch(() => {
        console.log("error");
      });
  }
}

module.exports = new Database();
