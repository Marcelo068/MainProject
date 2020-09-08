const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

const connect = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'restaurant',
    host: 'localhost'
})

connect.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Database Connected Successfully');
})

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/foods', (req, res) => {
    connect.query('select * from foods', [], (err, result, field) => {
        if (err) {
            console.log(err)
            res.status(500).json({ msg: err })
            return
        }
        res.status(200).json(result);
        return
    })
})

app.get('/drinks', (req, res) => {
    connect.query('select * from drinks', [], (err, result, field) => {
        if (err) {
            console.log(err)
            res.status(500).json({ msg: err })
            return
        }
        res.status(200).json(result);
        return
    })
})

app.get('/desserts', (req, res) => {
    connect.query('select * from desserts', [], (err, result, field) => {
        if (err) {
            console.log(err)
            res.status(500).json({ msg: err })
            return
        }
        res.status(200).json(result);
        return
    })
})

app.post('/login', (req, res) => {
    const userData = req.body;
    connect.query('select * from users where email = ? and password = ?', [userData.email, userData.password], (err, result, field) => {
        if (err) {
            console.log(err);
            res.status(500).json({ msg: err });
            return
        }
        if (!result.length) {
            res.status(200).json(undefined);
            return
        }
        const user = {
            id: result[0].id,
            username: result[0].user_name,
            email: result[0].email
        }

        jwt.sign({ user }, 'secretkey', { expiresIn: '1000s' }, (err, token) => {
            result.push({ token: token });
            res.status(200).json(result)
            return
        })
    })
})

app.post('/register', (req, res) => {
    const userData = req.body;
    connect.query('insert into users(user_name,email,password) values (?,?,?)', [userData.user_name, userData.email, userData.password], (err, result, field) => {
        if (err) {
            console.log(err);
            res.status(500).json({ msg: err });
            return
        }
        res.status(200).json(result);
        return
    })
})

app.get('/authenticate', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.status(403);

        }
        if (authData !== undefined) {
            let data = [];
            data.push(authData);
            data.push({ authenticate: true })
            res.status(200).json(data);
            return
        } else {
            //you should improve this code
            res.status(200).json(authData)
            return
        }
    })
})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {
        //forbidden
        res.status(403);
    }
    next();
}

app.listen('3000', () => console.log('server is listening on port 3000'));