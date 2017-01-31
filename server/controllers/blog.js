const sequelize = require('../database')
const { User } = require('../model/blog.model')
module.exports = {
  saveBlog(req,res,next) {
    console.log('here');
    console.log(req.body);
    const file = req.body
    sequelize.save()
              .then( result => {
                console.log(`stored ${result}`);
              })
              .catch ( err => console.log(`error ${err}`))
    next();
  }
}
