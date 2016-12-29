const sequelize = require('../database')
const cookieParser = require('cookie-parser')
const { User } = require('../model/user.model')
const bcrypt = require('bcrypt')
const saltRounds = 10;


module.exports = {
    createUser (req,res, next) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
          req.body.password = hash;// Store hash in your password DB.
          res.cookie('username', req.body.username); //generate username cookie
        });
      });
      sequelize.sync().then(() => {
        User.create(req.body).then(results => next())
          .catch(error => res.status(400).end());
      }).catch(() => res.status(400).send('error'));
      next();
  },
  getUser (req,res,next) {
    User.find({
     where: {
       username: req.body.username
     }
   }).then(user => {
     if (user) res.cookie('username', user.username);
     if (!user) {
       User
       .findOne({
         where: {
           username: req.body.username
         }
       })
       .then(user => {
         if (!user) return res.status(400).send('no user is the db')
           bcrypt.compare(req.body.password, user.dataValues.password, (err, val) => {
             req.session.user = user.dataValues.username;
             res.cookie('username', user.username);
             req.session.save( () => console.log('saving session'));
               if (val === false) res.status(400).send('no user')
               else next();
           })
       }).catch(err => res.status(400).end());
     }
   }).catch(err => res.status(400).send(err))
 }
}
