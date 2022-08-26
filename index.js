const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log('Mi port' + port);
});

const sequelize = new Sequelize('disney', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

const Character = sequelize.define('Character', {
    id_character:{ 
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

sequelize.sync({force:true}); 



app.get('/', (req, res)=>{
    res.send('Hola Mundo');
});