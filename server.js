const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
app.use(express.static(path.join(__dirname, 'Sem10')));

app.get('/login',(req,res)=> {
    res.sendFile(path.join(__dirname, 'Sem10', 'login.html'))
});

app.get('/register',(req,res)=> {
    res.sendFile(path.join(__dirname, 'Sem10', 'register.html'))
});

var handleRegister = function (req, res) {
    console.log(req.body)
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    if (!newUser.name || !newUser.email || !newUser.password) {
        return res.status(400).json({ msg: 'Please provide name, email and password'});
    }
    else {
        return res.json({result: 'Data sent with success!'});
    }
}

var handleLogin = function (req, res) {
    console.log(req.body)
    const User = {
        email: req.body.email,
        password: req.body.password,
    };
    if (User.email && User.password) {
        return res.json({result: 'Data sent with success!'});
    }
    else {
        return res.status(400).json({ msg: 'User does not exist'});
    }
}

app.post('/register', handleRegister);

app.put('/login', handleLogin);