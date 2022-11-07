const {Interview} = require('../models');

const interviewData = [
    {
        app_id: 1,
        int_time: 11/03/2022,
        int_location: 'Phone',
        int_round: 'First',
        int_comments: 'Job uses JavaScript',
        user_id: 1
    },
    {
        app_id: 1,
        int_time: 11/03/2022,
        int_location: 'On site',
        int_round: 'Second',
        int_comments: 'Job uses JavaScript',
        user_id: 2
    },
    {
        app_id: 1,
        int_time: 11/03/2022,
        int_location: 'Zoom',
        int_round: 'Third',
        int_comments: 'Job uses JavaScript',
        user_id: 3
    },
    {
        app_id: 1,
        int_time: 11/03/2022,
        int_location: 'Skype',
        int_round: 'Fourth',
        int_comments: 'Job uses JavaScript',
        user_id: 4
    },
];

const seedInterview = () => Interview.bulkCreate(interviewData);

module.exports = seedInterview;