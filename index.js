const express = require('express');
const routerApi = require('./routes/index.js')
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log('Mi port' + port);
});



routerApi(app);



