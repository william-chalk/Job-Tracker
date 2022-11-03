const seedApplications = require('./application-seeds');
const seedInterview = require('./interview-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('---------------------');
    await seedUsers();
    console.log('---------------------');
    await seedApplications();
    console.log('---------------------');
    await seedInterview();
    console.log('---------------------');

    process.exit(0);
};

seedAll();