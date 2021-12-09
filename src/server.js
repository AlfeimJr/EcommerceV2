const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
// const isLogin = require('./middlewares/isLogin')

const rotas = require('./routes/index');

const rotasDeProdutos = require("./routes/produtos");


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve("src","views"));
app.use(session(
        {
        secret:'devgame',
        resave:true,
        saveUninitialized:true
        }
    )
);

app.use(methodOverride("_method"));




app.use(express.urlencoded({extended:false}))

app.use(express.static(path.resolve("src",'public')));
app.use(rotas);

app.use(rotasDeProdutos);


app.listen(3000, ()=>{
    console.log('server in:', 'http://localhost:3000')
});