const sequelize = require('../config/connection');
const {User,Application} = require('../models');

const userData = [
    {
        firstName: 'Jennifer',
        lastName: 'Argent',
        email: 'jennifer@example.com',
        password: 'testpassword'
    },
    {
        firstName: 'Landen',
        lastName: 'Blankinship',
        email: 'landen@example.com',
        password: 'testpassword'
    },
    {
        firstName: 'Krista',
        lastName: 'Cannady',
        email: 'krista@example.com',
        password: 'testpassword'
    },
    {
        firstName: 'William',
        lastName: 'Chalk',
        email: 'william@example.com',
        password: 'testpassword'
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;