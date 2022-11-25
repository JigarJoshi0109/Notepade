const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoute = require('./routes/userRoute');
const { notfound, errorHandler } = require("./Middlewares/errorMiddlewares");

const app = express();
dotenv.config();
connectDB();

app.use(express.json())


app.get("/", (req, res) => {
  res.send("API is Running.......");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.use('/api/users',userRoute)

app.use(notfound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server start on port ${PORT}`));
