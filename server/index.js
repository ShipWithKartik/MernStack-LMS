const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({});

const cookieParser = require("cookie-parser");
const cors = require("cors");

const {connectDB} = require('./database/dbConnect');
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

const userRoute = require("./routes/user.route");


app.use("/api/v1/user", userRoute);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

