'use strict';
module.exports = function(app) {
  var eventList = require('../controllers/event');


  // eventList Routes
  app.route('/events')
    .get(eventList.viewAllEvents)
    .post(eventList.createEvent);


  app.route('/events/:eventId')
    .get(eventList.viewEvent)
    .put(eventList.updateEvent)
    .delete(eventList.deleteEvent);
};
