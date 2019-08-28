const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res)=>{
	try{
		let rows = connection.manyOrNone(`
		SELECT * FROM drawing ORDER BY id;
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.get('/:id', async (req, res)=>{
	try{
		let rows = connection.oneOrNone(`
		SELECT * FROM drawing WHERE id = $1;
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
			INSERT INTO drawing (
			drawing
			) VALUES (
			$1
			) RETURNING id, drawing;
			`, [req.body.drawing]);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.put('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		UPDATE drawing SET drawing = $1 WHERE id = $2;
		`, [req.body.drawing, +req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

router.delete('/:id', async (req, res) => {
	try{
		let rows = await connection.none(`
		DELETE FROM drawing WHERE id = $1;
		`, [+req.params.id]);
		res.sendStatus(200);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;