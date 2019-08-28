const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM specification2 ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM specification2 WHERE id = $1;
		`, [+req.params.id]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/filter/:id_reducer', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM specification2 WHERE id_reducer = $1 ORDER BY id;
		`, [+req.params.id_reducer]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.post('/', async (req, res) => {
	try{
		console.log(req.body);
		let rows = connection.one(`
		INSERT INTO specification2 (
			id_reducer,
			rotation_freq,
			mode_work,
			nom8,
			nom10,
			nom12_5,
			nom16,
			nom20,
			nom25,
			nom31_5,
			nom40,
			nom50
		) VALUES (
		$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
		) RETURNING id, id_reducer;
		`, [
		+req.body.id_reducer, 
		+req.body.rotation_freq, 
		req.body.mode_work, 
		+req.body.nom8, 
		+req.body.nom10, 
		+req.body.nom12_5, 
		+req.body.nom16,
		+req.body.nom20,
		+req.body.nom25,
		+req.body.nom31_5,
		+req.body.nom40,
		+req.body.nom50
		]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE specification2 SET 
		id_reducer = $1,
		rotation_freq = $2,
		mode_work = $3,
		nom8 = $4,
		nom10 = $5,
		nom12_5 = $6,
		nom16 = $7,
		nom20 = $8,
		nom25 = $9,
		nom31_5 = $10,
		nom40 = $11,
		nom50 = $12
		WHERE id = $13;
		`, [
		+req.body.id_reducer, 
		+req.body.rotation_freq, 
		req.body.mode_work, 
		+req.body.nom8, 
		+req.body.nom10, 
		+req.body.nom12_5, 
		+req.body.nom16,
		+req.body.nom20,
		+req.body.nom25,
		+req.body.nom31_5,
		+req.body.nom40,
		+req.body.nom50,
		+req.params.id
		]);
		res.sendStatus(200);
	}catch(err){
		console.log('SPEC2, PUT: ');
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM specification2 WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;