const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.send("hello");
});


const PORT = process.env.PORT || 3000
app.listen(3000,()=>console.log(`Runnung in ${PORT}`));


