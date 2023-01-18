const express = require("express")
const app = express()
const cookieSession = require("cookie-session")
const passport = require('passport')
const passportSetup = require('./passport')
const cors = require('cors')
const authRoute = require('./routes/auth')
require("dotenv").config()

app.use(cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100
}))


app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,PUT",
    credentials:true,   
}))

app.use('/auth',authRoute)

const port = 5000;
app.listen(port, () => {
    console.log("node server started", port);
})