const { Application } = require("../models");

const applicationData = [
  {
    job_title: "Web Developer",
    company_name: "Google",
    app_url: "http://google.com",
    app_status: "accepted",
    app_language: "JavaScript",
    user_id: 1,
  },
  {
    job_title: "Web Developer",
    company_name: "Apple",
    app_url: "http://apple.com",
    app_status: "accepted",
    app_language: "JavaScript",
    user_id: 2,
  },
  {
    job_title: "Web Developer",
    company_name: "Amazon",
    app_url: "http://amazon.com",
    app_status: "accepted",
    app_language: "JavaScript",
    user_id: 3,
  },
  {
    job_title: "Web Developer",
    company_name: "Netflix",
    app_url: "http://netflix.com",
    app_status: "accepted",
    app_language: "JavaScript",
    user_id: 4,
  },
];

const seedApplications = () => Application.bulkCreate(applicationData);

module.exports = seedApplications;
