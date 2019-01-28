const bcrypt = require('bcrypt');
const saltRounds = 10;

senha = 'teste'

async function init(plainPassword) {
    let salt = await bcrypt.genSalt(saltRounds);

    let hashPassword = await bcrypt.hash(plainPassword, salt);
    
    let check = await bcrypt.compare(plainPassword, hashPassword);

    return hashPassword;
}


init(senha).then(x => {
    bcrypt.compare(senha, x).then(result => console.log(result))
});
