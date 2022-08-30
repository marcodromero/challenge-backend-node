const {models} = require('../database/sequelize'); /*importing existing models*/

class characterService{

    async getCharacters(){
        const rta = await models.Character.findAll();
        return  rta;
    } 
  
}

module.exports = characterService;