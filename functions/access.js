const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for HTTP(S) request event
* @returns {object.http} result Your return value
*/
module.exports = async () => {
  return {
    statusCode: 302,
    headers: {
      'Location': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    body: ''
  };
};