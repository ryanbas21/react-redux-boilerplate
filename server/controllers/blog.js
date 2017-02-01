const sequelize = require('../database')
const { User } = require('../model/blog.model')
module.exports = {
  saveBlog(req,res,next) {
    res.setHeader('content-type', 'application/json', 'utf-8');
    console.log('here');
    const file = req.body
    sequelize.save()
              .then( result => {
                console.log(`stored ${result}`);
              })
              .catch ( err => console.log(`error ${err}`))
    next();
  }
}
