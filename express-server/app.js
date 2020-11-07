const express = require('express');
const authRoutes  = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static('static'));
app.use(express.json());
app.use(cookieParser)

app.set('view engine','ejs');

app.get('/cooie',(req,res)=>{
    res.cookie('User',false);
    res.cookie('is',true);
    res.send("Got cokie");
})

app.use(authRoutes);



const PORT = process.env.PORT || 3000;
app.listen(3000,()=>console.log(`Runnung in ${PORT}`));