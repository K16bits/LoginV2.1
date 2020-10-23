const { request, response } = require('express');
const express = require('express')
const router = express.Router();
const controllers = require('./Controllers/Control');

router.post("/add",controllers.add)
router.get("/list",controllers.list)

module.exports = router;