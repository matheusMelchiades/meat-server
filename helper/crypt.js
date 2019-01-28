const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.encrypt = async (plainPassword) => {

    let salt = await bcrypt.genSalt(saltRounds);

    let hashPassword = await bcrypt.hash(plainPassword, salt);
    
    return hashPassword;
};

module.exports.compare = async (text, hash) => {
    return await bcrypt.compare(text, hash);
};