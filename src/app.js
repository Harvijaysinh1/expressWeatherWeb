const express=require('express')
const res = require('express/lib/response')
const path=require('path')
const hbs=require('hbs');
const { hasSubscribers } = require('diagnostics_channel');
const { handlebars } = require('hbs');
const port=4000;

const app= express()
//path
const static_path=path.join(__dirname,'../public')
const templet_path=path.join(__dirname,'../templet/views')
const partials_path=path.join(__dirname,'../templet/partials')

//static
// app.use(express.static(static_path))

//hbs
app.set('view engine','hbs')
app.set('views',templet_path)
hbs.registerPartials(partials_path)



app.get('/',(req,res)=>{
   
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.send('404 error page-- ')
})

app.listen(port,()=>{
    console.log(`server listening at ${port}`);
})