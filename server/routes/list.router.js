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

router.delete('/:id', (req,res)=>{
    let reqId = req.params.id;
    console.log('Delete ID', reqId);
    let queryText = `DELETE FROM "items" WHERE id = $1;`;
    pool.query(queryText, [reqId])
    .then((result)=>{
        console.log('Item deleted');
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error making database query', queryText, error);
    })
  })

  router.put('/:id', (req, res) => {
    let valueArrays= [req.body.ispurchased, req.params.id];
    console.log('Here is the req.body.isPurchased', req.body.ispurchased);
    
    const queryText = `
    UPDATE "items"
    SET "ispurchased" = $1
    WHERE "id" = $2;
    `;
    pool.query(queryText, valueArrays)
    .then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log('Here is the error', err);
        
        res.sendStatus(500);
    });
});



module.exports = router;
