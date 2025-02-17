const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'MALVIN-XD~FkIQFKrL#yWFMOmZQROxLSeqKtXhsyeymTvwfmM_V1O5OtUoj0JU' : process.env.SESSION_ID,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'PayoeboiMalvinTech' : process.env.GITHUB_USER_NAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,        
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '263714757857' : process.env.OWNER_NUMBER
};
