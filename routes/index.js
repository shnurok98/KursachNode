const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('API of the KursachNode!'));


module.exports = router;