const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
const User = require('./User');

// CREATES A NEW USER
router.post('/', (req, res) => {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    (err, user) => {
      if (err) {
        res
          .status(500)
          .send('There was a problem adding the information to the database.');
      } else {
        res.status(200).send(user);
      }
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send('There was a problem finding the users.');
    } else {
      res.status(200).send(users);
    }
  });
});
module.exports = router;
