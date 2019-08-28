const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res)=>{
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM assembly_var ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res)=>{
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM assembly_var WHERE id = $1;
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
			INSERT INTO assembly_var (
			variant
			) VALUES (
			$1
			) RETURNING id, variant;
			`, [req.body.variant]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE assembly_var SET variant = $1 WHERE id = $2;
		`, [req.body.variant, +req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log('ASM, PUT: ');
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM assembly_var WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;