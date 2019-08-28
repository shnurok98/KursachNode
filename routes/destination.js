const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res)=>{
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM destination ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res)=>{
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM destination WHERE id = $1;
		`, [+req.params.id]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.post('/', async (req, res)=>{
	try{
		console.log(req.body);
		let rows = connection.one(`
			INSERT INTO destination (
			destination
			) VALUES (
			$1
			) RETURNING id, destination;
			`, [req.body.destination]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE destination SET destination = $1 WHERE id = $2;
		`, [req.body.destination, +req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM destination WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;