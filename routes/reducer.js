const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM reducer ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM reducer WHERE id = $1;
		`, [+req.params.id]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.post('/', async (req, res) => {
	try{
		console.log(req.body);
		let rows = connection.one(`
		INSERT INTO reducer (
		stamp, image, id_destination, id_condition, id_drawing, id_parameters, id_assembly_var, id_specification
		) VALUES (
		$1, $2, $3, $4, $5, $6, $7, $8
		) RETURNING id, stamp;
		`, [req.body.stamp, req.body.image, +req.body.id_destination, +req.body.id_condition, +req.body.id_drawing, +req.body.id_parameters, +req.body.id_assembly_var, +req.body.id_specification]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE reducer SET stamp = $1, image = $2, id_destination = $3, id_condition = $4, id_drawing = $5, id_parameters = $6, id_assembly_var = $7, id_specification = $8 WHERE id = $9;
		`, [req.body.stamp, req.body.image, +req.body.id_destination, +req.body.id_condition, +req.body.id_drawing, +req.body.id_parameters, +req.body.id_assembly_var, +req.body.id_specification, +req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log('REDUCER, PUT: ');
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM reducer WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;