const express = require('express');
const router = express.Router();

const characterService = require('../services/charactersService.js');
const service = new characterService();

/*
router.get('/', (req, res)=>{
    const {name, movies, age, weight} = req.query;
    res.send('query:Busqueda de personajes por el nombre, filtrar por edad, peso o pelicula/serie');
}); */

router.get('/', async (req, res)=>{
    const characters = await service.getCharacters();
    res.json(characters); 
   
});

router.get('/:id', (req, res)=>{
    res.send('Detalle de un personaje(todos los atributos, peliculas y series)');
});

router.post('/', (req, res)=>{
    res.send('Nuevo personaje');
});

router.patch('/:id', (req, res)=>{
    const {id} = req.params;
    res.send('Modificar personaje');
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    res.send('Eliminar personaje');
});


module.exports = router;