const express = require('express')
const cookieParser = require('cookie-parser')


const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome to a simple cookie server');
});

const users = {
    name: "Sumon",
    Age: "21"
}

app.get('/setuser', (req, res) => {
    res.cookie("userData", users);
    res.send('user data added to cookie');
});

//Iterate users data from cookie
app.get('/getuser', (req, res) => {

    res.send(req.cookies);
});

app.get('/logout', (req, res) => {

    res.clearCookie('userData');
    res.send('user logout successfully');
});

//server listens to port 3000
app.listen(3000, (err) => {
    if (err)
        throw err;
    console.log('listening on port 3000');
});




