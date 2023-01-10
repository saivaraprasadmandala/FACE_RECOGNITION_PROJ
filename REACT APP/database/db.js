const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://Ismartsunny:Sunny2004@cluster0.u5xtfsc.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error with the database!", err));
