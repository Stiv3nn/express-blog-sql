const express = require('express');
const router = express.Router();

const routesController = require('../controllers/controller_routes')

// INDEX VISULIZZA TUTTI GLI ELEMENTI
router.get('/', routesController.index);


// SHOW VISUALIZZA L'ELEMENTO TRAMITE ID
router.get('/:id', routesController.show);


// STORE CREA UN ELEMENTO
router.post('/', routesController.store);


// UPDATE MODIFICA L'ELEMENTO
router.post('/:id', routesController.update);


// DESTROY CANCELLA L'ELEMENTO
router.delete('/:id', routesController.destroy);


module.exports = router;