const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/',(req,res) => {
    const sqlText = `SELECT * FROM items ORDER BY name DESC;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('got da stuff from the DB', result);
    }).catch((error) => {
        console.log(`rut ro raggy, ${sqlText}`, error);
    })
})

module.exports = router;