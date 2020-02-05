const express = require('express');
const app = express();
const path = require('path');
const uuid = require('uuid/v4');
const port = process.env.PORT || '3000';
// const logger = require('./middleware/logger');
// const moment = require('./middleware/moment');
const users = require('./models/Users');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// const users = [
//     {
//         "id": 1,
//         "name": 'Leanne Graham',
//         "username": 'Bret',
//         "email": 'Sincere@april.biz'
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv'
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net'
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org'
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca'
//     }
// ];



// app.use(logger.logMe);
// app.use(moment.myMoment);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, 'public'))
// });

//get a single user
// app.get('/api/users/:id', (req, res) => {
//     const userExists = users.filter(user => user.id === parseInt(req.params.id));
//     if(userExists.length !== 0){
//         return res.status(200).json(userExists[0]);
//     } else {
//         return res.status(400).json({message: `User with id:${req.params.id} does not exist`});
//     }
// });

//create user
// app.post('/', (req, res) => {
//     if(!req.body.name || !req.body.email){
//         return res.status(400).json({message: 'Please enter both a name and an email'});
//     }
//     const newUser = {};
//     newUser.id = uuid();
//     newUser.name = req.body.name;
//     newUser.email = req.body.email;
//     users.push(newUser);
//     return res.json(req.body);
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
