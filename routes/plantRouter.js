const Router = require('express')
const router = new Router()
const plantController = require('../controllers/plantController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), plantController.create)
router.delete('/:id', checkRole('ADMIN'), plantController.delete)
router.get('/', plantController.getAll)
router.get('/:id', plantController.getOne)

module.exports = router