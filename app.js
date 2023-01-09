const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config()

const port = process.env.PORT


app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use( express.static('public') );

app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'tu mama',
        datas:'curso de node'
    });
})

app.get('/generic',(req,res)=>{
    res.render('generic',{
        nombre:'tu mama',
        datas:'curso de node'
    });
});

app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre:'tu mama',
        datas:'curso de node'
    });
});

app.listen(port);