const express = require('express')
const router = express.Router();
const controllers = require('./Controllers/Control');

router.post("/user",controllers.add)
router.get("/user",controllers.list)
router.delete("user/:id",controllers.remove)

module.exports = router;