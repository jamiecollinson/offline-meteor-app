import { Ground } from 'meteor/ground:db';
import { Meteor } from 'meteor/meteor';
import faker from 'faker';

const Jobs = new Ground.Collection('jobs');

function jobsPublication() {
  Meteor.publish('jobs', () => {
    return Jobs.find({});
  });
}

function jobsMethod() {
  Meteor.methods({
    'addRandomJob': addRandomJob
  });
}

function addRandomJob() {
  const prefix = Meteor.isServer ? '[server]' : '[client]';
  Jobs.insert({name: `${prefix} ${faker.company.catchPhrase()}`});
}

export { Jobs, jobsPublication, jobsMethod, addRandomJob };
