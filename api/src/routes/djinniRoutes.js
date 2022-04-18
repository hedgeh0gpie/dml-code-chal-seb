const express = require('express')
const djinniController = require('./../controllers/djinniController')

const router = express.Router()

router.route('/').get(djinniController.getAllDjinn).post(djinniController.createDjinni)

router
  .route('/:id')
  .get(djinniController.getDjinni)
  .patch(djinniController.updateDjinni)
  .delete(djinniController.deleteDjinni)

module.exports = router
