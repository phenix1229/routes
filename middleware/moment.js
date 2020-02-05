const moment = require('moment');
const myMoment = (req, res, next)=>{
    console.log(moment().format('MMMM D, YYYY h:mA'));
    next();
}

module.exports = {
    myMoment
}