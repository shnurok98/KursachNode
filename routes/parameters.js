const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM parameters ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM parameters WHERE id = $1;
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
		INSERT INTO parameters (
			awb,
			awt,
			a,
			a1,
			a2,
			b,
			h,
			h1,
			h2,
			l1,
			l2,
			l3,
			l4,
			l5,
			b1,
			b2,
			d1,
			d2,
			d3,
			nh1,
			nh2,
			nl1,
			nl2,
			t1,
			t2,
			capacity,
			weight
		) VALUES (
		$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27
		) RETURNING id, awb;
		`, [
			+req.body.awb,
			+req.body.awt,
			+req.body.a,
			+req.body.a1,
			+req.body.a2,
			+req.body.b,
			+req.body.h,
			+req.body.h1,
			+req.body.h2,
			+req.body.l1,
			+req.body.l2,
			+req.body.l3,
			+req.body.l4,
			+req.body.l5,
			+req.body.b1,
			+req.body.b2,
			req.body.d1,
			+req.body.d2,
			+req.body.d3,
			+req.body.nh1,
			+req.body.nh2,
			+req.body.nl1,
			+req.body.nl2,
			+req.body.t1,
			+req.body.t2,
			+req.body.capacity,
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
		UPDATE parameters SET 
			awb = $1,
			awt = $2,
			a = $3,
			a1 = $4,
			a2 = $5,
			b = $6,
			h = $7,
			h1 = $8,
			h2 = $9,
			l1 = $10,
			l2 = $11,
			l3 = $12,
			l4 = $13,
			l5 = $14,
			b1 = $15,
			b2 = $16,
			d1 = $17,
			d2 = $18,
			d3 = $19,
			nh1 = $20,
			nh2 = $21,
			nl1 = $22,
			nl2 = $23,
			t1 = $24,
			t2 = $25,
			capacity = $26,
			weight = $27
		WHERE id = $28;
		`, [
			+req.body.awb,
			+req.body.awt,
			+req.body.a,
			+req.body.a1,
			+req.body.a2,
			+req.body.b,
			+req.body.h,
			+req.body.h1,
			+req.body.h2,
			+req.body.l1,
			+req.body.l2,
			+req.body.l3,
			+req.body.l4,
			+req.body.l5,
			+req.body.b1,
			+req.body.b2,
			req.body.d1,
			+req.body.d2,
			+req.body.d3,
			+req.body.nh1,
			+req.body.nh2,
			+req.body.nl1,
			+req.body.nl2,
			+req.body.t1,
			+req.body.t2,
			+req.body.capacity,
			+req.body.weight,
			+req.params.id
		]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM parameters WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;