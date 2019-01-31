const bcrypt = require('bcrypt');
const saltRounds = 10;

senha = 'teste'

module.exports.init = async function init(plainPassword) {
    let salt = await bcrypt.genSalt(saltRounds);

    let hashPassword = await bcrypt.hash(plainPassword, salt);
    
    let check = await bcrypt.compare(plainPassword, hashPassword);

    return hashPassword;
}

check = bcrypt.compare('teste123', '$2b$10$O6e9.hxX1ongy05gfMoaa.PTykwNJz9UE0PudvCKKpLLIe20meHky')

check.then(result => console.log(result))