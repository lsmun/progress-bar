'use strict';

var mongoose = require('mongoose'),
  Event = mongoose.model('Event');

exports.viewAllEvents = function(req, res) {
  Event.find({}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.createEvent = function(req, res) {
  var newEvent = new Event(req.body);
  newEvent.save(function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.viewEvent = function(req, res) {
  Event.findById(req.params.eventId, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.updateEvent = function(req, res) {
  Event.findOneAndUpdate(req.params.eventId, req.body, {new: true}, function(err, event) {
    if (err)
      res.send(err);
    res.json(event);
  });
};

exports.deleteEvent = function(req, res) {
  Event.remove({
    _id: req.params.eventId
  }, function(err, event) {
    if (err)
      res.send(err);
    res.json({ message: 'Event successfully deleted' });
  });
};