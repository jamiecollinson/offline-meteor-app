import { Meteor } from 'meteor/meteor';

import { Jobs, jobsPublication, jobsMethod, addRandomJob } from '/imports/jobs.js';

// Creates publication
jobsPublication();
// Creates server side method
jobsMethod();

Meteor.startup(() => {
  // code to run on server at startup
  Jobs.remove({});
  addRandomJob();
});
