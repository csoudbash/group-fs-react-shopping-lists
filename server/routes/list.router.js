const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET function retrieves items from database
router.get('/',(req,res) => {
    const sqlText = `SELECT * FROM items ORDER BY name DESC;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('got da stuff from the DB', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log(`rut ro raggy, ${sqlText}`, error);
        res.sendStatus(500);
    })
})

// POST function adds items to the database
router.post('/', (req, res) => {
    const newItem = req.body;
    console.log(req.body);
    const sqlText = `INSERT INTO items (name, quantity, unit) VALUES ($1, $2, $3);`;

    pool.query(sqlText, [newItem.name, newItem.quantity, newItem.unit])
        .then((result) => {
            res.sendStatus(201);
            
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;
