const express = require('express');
const router = express.Router();
const controllers = require('./Controllers/Control');
const Auth = require('./Middleware/Auth')

router.post("/user",controllers.add)
router.get("/user",controllers.list)
router.delete("/user/:id",controllers.remove)
router.post("/",controllers.autherticate)

module.exports = router;