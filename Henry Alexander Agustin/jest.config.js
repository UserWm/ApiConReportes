const moongose = require('mongoose')

module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest.setup.js']
};