const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homes/admin');
});
 module.exports = router