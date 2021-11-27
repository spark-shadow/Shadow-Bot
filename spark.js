/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PLKAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 PHONE: process.env.NUMBER === undefined ? '919526808481' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'undefined' : process.env.DEPLOYER,    
 THUMBNAIL: process.env.THUMBNAIL_URL === undefined ? 'https://i.imgur.com/xsKCqwZ.jpeg' : process.env.THUMBNAIL_URL,
 VERIFY: process.env.VERIFICATION_CAPTION === undefined ? '[Shadow Bot]\nCoded by @SPARK-SHADOW' : process.env.VERIFICATION_CAPTION,
 SHADOWPW: process.env._SHADOW_BOT_ACSESS_PASSWORD === undefined ? false : process.env._SHADOW_BOT_ACSESS_PASSWORD,
};
