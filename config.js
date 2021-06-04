// server configuration information

const facebookSecrets = require('./FacebookSecrets');

const clientId = facebookSecrets.clientId;
const clientSecret = facebookSecrets.clientSecret;

module.exports = {
  secretKey: '12345-67890-09876-54321',
  mongoUrl: 'mongodb://localhost:27017/nucampsite',
  facebook: {
    clientId,
    clientSecret,
  },
};
