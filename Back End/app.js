const express = require("express");
const mongoose = require("mongoose");
const { route } = require("./routes/user");
const app = express();
const addRouter = require("./routes/user")
const cors = require("cors")


mongoose.connect(
    "mongodb+srv://Vyshnavi:Vyshnavi@cluster0.w6wycc3.mongodb.net/Blog?retryWrites=true&w=majority"
);

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use("/", addRouter)



app.listen(5000, (err) => {
    if (err) {
        console.log("Failed to load");
    } else {
        console.log("Server running  successfully at port 5000");
    }
});