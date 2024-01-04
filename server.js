const express = require("express");
const app = express();

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://123456:1234567890@cluster0.raucbwi.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    // await mongoose.connect(uri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    await mongoose.connect(uri);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("Error connecting to mongoDB ", error);
  }
}

connect();

//schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

//model
const User = mongoose.model("User", userSchema);

const user = new User({
  username: "jack",
  password: "12345",
});

// POST route for creating a new user
app.post("/create-user", async (req, res) => {
  try {
    const user = new User({
      username: "jack",
      password: "12345",
    });

    await user.save();
    console.log("New user has been saved to the database successfully");
    res.send("New user has been saved to the database successfully");
  } catch (error) {
    console.log("Error connecting to mongoDB ", error);
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to my game app!");
});

// const port = 3000; // You can choose any port that's not in use
app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
