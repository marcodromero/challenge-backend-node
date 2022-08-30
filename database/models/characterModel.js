const {DataTypes, Model} = require('sequelize');

//model configuration
const CHARACTER_TABLE = 'Characters';

const CharacterSchema = {
    id_character:{ 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    weight: {
        allowNull: false,
        type: DataTypes.DECIMAL,
    },
    history: {
        allowNull: false,
        type: DataTypes.STRING(140)
    }
};

class Character extends Model{

    static associate(models){
        // N:N relationship. A new table is created (character_movie) with the ids of the associated tables.
        this.belongsToMany(models.Movie, { through: 'character_movie' }); 
    }

    static config(sequelize){ 
        return{
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'Character',
            timestamps: false
        }
    }
};

module.exports = {CHARACTER_TABLE, CharacterSchema, Character};
