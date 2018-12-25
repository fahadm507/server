const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//tell mongoose that the schema needs to be created
mongoose.model("users", userSchema);
