const express = require('express');
const { getUrl, makeUrl, getPercent } = require('../controllers/url')
const { Router } = express;
const router = Router();
router.get('/link/:code', getUrl);
router.post('/link', makeUrl);
router.post('/get-percent', getPercent);
module.exports = router;