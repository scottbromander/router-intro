const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// ROUTES
const catRouter = require('./routers/cat.router');
const dogRouter = require('./routers/dog.router');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// ROUTERS
app.use('/api/cats', catRouter);
app.use('/api/dogs', dogRouter);

// /api/dogs/widget - GET

app.listen(PORT, () => {
    console.log(`Hey I am up and running! On port: ${PORT}`);
})