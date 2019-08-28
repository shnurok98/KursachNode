const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM specification ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM specification WHERE id = $1;
		`, [+req.params.id]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

// router.get('/filter/:id_reducer', async (req, res) => {
// 	try{
// 		let rows = connection.manyOrNone(`
// 		SELECT * FROM specifications WHERE id_reducer = $1 ORDER BY id;
// 		`, [+req.params.id_reducer]);
// 		res.send(await rows);
// 	}catch(err){
// 		console.log(err);
// 	}
// });

router.post('/', async (req, res) => {
	try{
		console.log(req.body);
		let rows = connection.one(`
		INSERT INTO specification (
			gear_ratio,
			axis_distance,
			nom_rot,
			in_sh,
			out_sh,
			kpd,
			weight
		) VALUES (
		$1, $2, $3, $4, $5, $6, $7
		) RETURNING id;
		`, [
			req.body.gear_ratio,
			+req.body.axis_distance,
			+req.body.nom_rot,
			+req.body.in_sh,
			+req.body.out_sh,
			req.body.kpd,
			+req.body.weight
		]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE specification SET 
			gear_ratio = $1,
			axis_distance = $2,
			nom_rot = $3,
			in_sh = $4,
			out_sh = $5,
			kpd = $6,
			weight = $7
		WHERE id = $8;
		`, [
		req.body.gear_ratio,
		+req.body.axis_distance,
		+req.body.nom_rot,
		+req.body.in_sh,
		+req.body.out_sh,
		req.body.kpd,
		+req.body.weight,
		+req.params.id
		]);
		res.sendStatus(200);
	}catch(err){
		console.log('SPEC, PUT: ');
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM specification WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;