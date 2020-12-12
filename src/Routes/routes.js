const express = require ('express');
const droneController = require('../Controller/droneController')
const routes = express.Router();


//Rotas:

//Rota padrão.
routes.get('/', (req,res) => { return res.json({Api:'drone'}) })

//Rota para listar todos drones.
routes.get('/drones/listar', droneController.listAll)

//Rota para listar um drone por ID.
routes.get('/drones/listar/:id', droneController.listById)

//Rota para cadastrar um novo drone.
routes.post('/drones/cadastrar', droneController.new)

//Rota para atualizar um drone por ID
routes.put('/drones/atualizar/:id', droneController.updateById)

//Rota para deletar um drone por ID
routes.delete('/drones/deletar/:id', droneController.deleteById)

module.exports = routes;