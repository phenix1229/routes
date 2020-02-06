const express = require('express');
const app = express();
const path = require('path');
// const uuid = require('uuid/v4');
const port = process.env.PORT || '3000';
const logger = require('morgan');
// const moment = require('./middleware/moment');
const users = require('./models/Users');
const userRoutes = require('./routes/userRoutes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', userRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
