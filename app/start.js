// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: [ 'env' ]
})

// Import the rest of our application.
//module.exports = require('./subject_example.js');
//module.exports = require('./observable_example.js');
//module.exports = require('./behaviour_subject_example.js');
module.exports = require('./replay_subject_example.js');
