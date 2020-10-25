const express = require('express')
const router = express.Router();
const controllers = require('./Controllers/Control');

router.post("/user",controllers.add)
router.get("/user",controllers.list)
router.delete("/user/:id",controllers.remove)
router.get("/user/logar",controllers.autherticate)

module.exports = router;