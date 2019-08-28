const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM stamp ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM stamp WHERE id = $1;
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
		INSERT INTO stamp (
		id_reducer, type, axis_distance, nom_ratio, build_opt, shaft_end, clim_ver, accom_category
		) VALUES (
		$1, $2, $3, $4, $5, $6, $7, $8
		) RETURNING id, stamp;
		`, [+req.body.id_reducer, req.body.type, +req.body.axis_distance, +req.body.nom_ratio, +req.body.build_opt, req.body.shaft_end, req.body.clim_ver, +req.body.accom_category]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE stamp SET id_reducer = $1, type = $2, axis_distance = $3, nom_ratio = $4, build_opt = $5, shaft_end = $6, clim_ver = $7, accom_category = $8 WHERE id = $9;
		`, [+req.body.id_reducer, req.body.type, +req.body.axis_distance, +req.body.nom_ratio, +req.body.build_opt, req.body.shaft_end, req.body.clim_ver, +req.body.accom_category, +req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM stamp WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;