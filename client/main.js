import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Jobs, addRandomJob, jobsMethod } from '/imports/jobs.js';

import './main.html';

// Add method to client
jobsMethod();

Template.hello.onCreated(function helloOnCreated() {
  this.subscribe('jobs');
});

Template.hello.helpers({
  connectionStatus() {
    return Meteor.status().status;
  },
  jobs() {
    return Jobs.find();
  },
  counter() {
    return Jobs.find().count();
  },
});

Template.hello.events({
  'click button.client-add'(event, instance) {
    event.preventDefault();
    addRandomJob();
  },
  'click button.server-add'(event, instance) {
    event.preventDefault();
    Meteor.call('addRandomJob');
  },
});

Template.jobItem.events({
  'click button'(event, instance) {
    event.preventDefault();
    Jobs.remove(instance.data.job._id);
  },
});
