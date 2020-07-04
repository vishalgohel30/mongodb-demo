
const express = require('express');
const { Users } = require('../model/users.model');
const { ContactsAddSchema } = require('../schema/index');
const appRoute = express();
const ObjectId = require('mongoose').Types.ObjectId;
const validator = require('express-joi-validation').createValidator({})

const errorMessage = (err) => err.message.slice(err.message.indexOf('`'));

appRoute.get('/list', (req, res) => {
  Users.find((err, docs) => {
    if (!err) { res.send(docs) } else {
      console.log('error in user :' + JSON.stringify(err, undefined, 2))
    }
  })
});

appRoute.get('/edit/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record');
  Users.findById(req.params.id, (err, docs) => {
    if (!err) { res.send(docs) } else {
      console.log('error in user :' + JSON.stringify(err, undefined, 2))
    }
  })
});

appRoute.post('/add',validator.query(ContactsAddSchema), (req, res) => {
  const addUser = Users({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
  });
  addUser.save((err, doc) => {
    if (!err) { res.send(doc) }
    else {
      res.send(errorMessage(err))
      console.log(a,'add error ' + JSON.stringify(err, undefined, 2))
    }
  })
});

appRoute.post('/update', (req, res) => {
  const query = { _id: req.body.id };
  const user = {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
  }

  Users.findByIdAndUpdate(query, { $set: user }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc) }
    else {
      console.log('Update error ' + JSON.stringify(err, undefined, 2))
    }
  })
});

appRoute.post('/delete', (req, res) => {
  Users.findByIdAndRemove(req.body.id, { new: false }, (err, doc) => {
    if (!err) { res.send(doc) }
    else {
      console.log('delete error ' + JSON.stringify(err, undefined, 2))
    }
  })
});


module.exports = appRoute;