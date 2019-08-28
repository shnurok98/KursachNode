const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res) => {
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM parameters2 ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res) => {
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM parameters2 WHERE id = $1;
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
		INSERT INTO parameters2 (
			awb ,
			awn ,
			awt ,
			a ,
			a1 ,
			b ,
			b1 ,
			h ,
			h1 ,
			h2 ,
			l1 ,
			l2 ,
			l3 ,
			l4 ,
			l5 ,
			l6 ,
			l7 ,
			nb1 ,
			nb2 ,
			d1 ,
			d2 ,
			d3 ,
			d4 ,
			d5 ,
			d6 ,
			d7 ,
			d8 ,
			nh1 ,
			nh2 ,
			nh3 ,
			nh4 ,
			nl1 ,
			nl2 ,
			nl3 ,
			nl4 ,
			t1 ,
			t2 ,
			v ,
			weight 
		) VALUES (
		$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39
		) RETURNING id, awb;
		`, [
			+req.body.awb ,
			+req.body.awn ,
			+req.body.awt ,
			+req.body.a ,
			+req.body.a1 ,
			+req.body.b ,
			+req.body.b1 ,
			+req.body.h,
			+req.body.h1 ,
			+req.body.h2 ,
			+req.body.l1 ,
			+req.body.l2 ,
			+req.body.l3 ,
			+req.body.l4 ,
			+req.body.l5 ,
			+req.body.l6 ,
			+req.body.l7 ,
			+req.body.nb1 ,
			+req.body.nb2 ,
			+req.body.d1 ,
			+req.body.d2 ,
			req.body.d3 ,
			req.body.d4 ,
			+req.body.d5 ,
			req.body.d6 ,
			+req.body.d7 ,
			+req.body.d8 ,
			+req.body.nh1 ,
			+req.body.nh2 ,
			+req.body.nh3 ,
			+req.body.nh4 ,
			+req.body.nl1 ,
			+req.body.nl2 ,
			+req.body.nl3 ,
			+req.body.nl4 ,
			req.body.t1 ,
			req.body.t2 ,
			req.body.v ,
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
		UPDATE parameters2 SET 
			awb = $1,
			awn = $2,
			awt = $3,
			a = $4,
			a1 = $5,
			b = $6,
			b1 = $7,
			h = $8,
			h1 = $9,
			h2 = $10,
			l1 = $11,
			l2 = $12,
			l3 = $13,
			l4 = $14,
			l5 = $15,
			l6 = $16,
			l7 = $17,
			nb1 = $18,
			nb2 = $19,
			d1 = $20,
			d2 = $21,
			d3 = $22,
			d4 = $23,
			d5 = $24,
			d6 = $25,
			d7 = $26,
			d8 = $27,
			nh1 = $28,
			nh2 = $29,
			nh3 = $30,
			nh4 = $31,
			nl1 = $32,
			nl2 = $33,
			nl3 = $34,
			nl4 = $35,
			t1 = $36,
			t2 = $37,
			v = $38,
			weight = $39
		WHERE id = $40;
		`, [
			+req.body.awb ,
			+req.body.awn ,
			+req.body.awt ,
			+req.body.a ,
			+req.body.a1 ,
			+req.body.b ,
			+req.body.b1 ,
			+req.body.h,
			+req.body.h1 ,
			+req.body.h2 ,
			+req.body.l1 ,
			+req.body.l2 ,
			+req.body.l3 ,
			+req.body.l4 ,
			+req.body.l5 ,
			+req.body.l6 ,
			+req.body.l7 ,
			+req.body.nb1 ,
			+req.body.nb2 ,
			+req.body.d1 ,
			+req.body.d2 ,
			req.body.d3 ,
			req.body.d4 ,
			+req.body.d5 ,
			req.body.d6 ,
			+req.body.d7 ,
			+req.body.d8 ,
			+req.body.nh1 ,
			+req.body.nh2 ,
			+req.body.nh3 ,
			+req.body.nh4 ,
			+req.body.nl1 ,
			+req.body.nl2 ,
			+req.body.nl3 ,
			+req.body.nl4 ,
			req.body.t1 ,
			req.body.t2 ,
			req.body.v ,
			+req.body.weight,
			+req.params.id
		]);
		res.sendStatus(200);
	}catch(err){
		console.log('PARAM2: PUT');
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM parameters2 WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;