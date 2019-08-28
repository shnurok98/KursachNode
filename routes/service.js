const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const connection = require('../db');


router.get('/', async (req, res)=>{
	try{
		let rows = connection.manyOrNone(`
			SELECT 
				reducer.id, specification2 
			FROM 
				reducer, specification2
			WHERE 
				reducer.id = specification2.id_reducer 
				AND 
				specification2.rotation_freq = 1000 
				AND 
				specification2.mode_work = 'Л' 
				AND 
				(specification2.nom8 > 500 OR specification2.nom10 = 28000 OR specification2.nom12_5 = 28000 OR specification2.nom16 = 28000 OR specification2.nom20 = 28000 OR specification2.nom25 = 28000 OR specification2.nom31_5 = 28000 OR specification2.nom40 = 28000 OR specification2.nom50 = 28000);
		`);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

// router.get('/:id', async (req, res)=>{
// 	try{
// 		let rows = connection.oneOrNone(`
// 		SELECT * FROM drawing WHERE id = $1;
// 		`, [+req.params.id]);
// 		res.send(await rows);
// 	}catch(err){
// 		console.log(err);
// 	}
// });

function makeDBstr(str, rq ,name){
	if(rq != ''){
		str+= `specification.${name}${rq} `;
		str+= `AND `;
	}
	return str;
}

function makeDBstr2(str, rq ,name){
	if(rq != ''){
		str+= `specification2.${name}${rq} `;
		str+= `AND `;
	}
	return str;
}

router.post('/', async (req, res)=>{
	try{
		let str = '';
		let qselect = 'SELECT reducer.id, reducer.stamp, reducer.image, reducer.id_specification, specification.gear_ratio ';
		str += qselect;
		let qfrom = 'FROM reducer, specification ';
		str += qfrom;
		let qwhere = 'WHERE reducer.id_specification = specification.id AND ';
		str += qwhere;
		// let qtype = `substring(reducer.stamp, 1, 1)="${req.body.type}" AND `;
		// str+= qtype;
		// str = makeDBstr(str, req.body.gear_ratio, 'gear_ratio');
		str = makeDBstr(str, req.body.axis_distance, 'axis_distance');
		// str = makeDBstr2(str, req.body.rotation_freq, 'rotation_freq');
		str = makeDBstr(str, req.body.nom_rot, 'nom_rot');
		str = makeDBstr(str, req.body.in_sh, 'in_sh');
		str = makeDBstr(str, req.body.out_sh, 'out_sh');
		// str = makeDBstr(str, req.body.kpd, 'kpd');
		str = makeDBstr(str, req.body.weight, 'weight');
		// удал посл энд
		let nm = str.lastIndexOf('AND');
		str = str.substr(0, nm);
		str+=';';
		// let qgr = `specification.gear_ration ${req.body.gear_ratio} `;
		// let qax = `specification.axis_distance ${req.body.axis_distance} `;
		// let qax = `specification.nom_rot ${req.body.nom_rot} `;
		// let qax = `specification.in_sh ${req.body.in_sh} `;
		// let qax = `specification.out_sh ${req.body.out_sh} `;
		// let qax = `specification.kpd ${req.body.kpd} `;
		// let qax = `specification.weight ${req.body.weight} `;
		// str = str + qtype
		console.log('ЗАПРОС: ');
		console.log(str);
		// let query = {};
		console.log(req.body);
		
		// for(val in body){
		// 	//+query
		// 	console.log(val);
		// }
		// по каждому атрибуту + к строке => запрос

		// console.log(req.body.q);
		let rows = connection.manyOrNone(str);
		let data = await rows;
		console.log(data);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

router.post('/spec2', async (req, res)=>{
	try{
		// IF != UNDEFINED!!!
		let str = `
			SELECT 
				reducer.id, specification2 
			FROM 
				reducer, specification2
			WHERE 
				reducer.id = specification2.id_reducer AND `;
		if(req.body.rotation_freq != ''){
			str+= `
			specification2.rotation_freq ${req.body.rotation_freq} 
			AND `;
		}
		if(req.body.mode_work != ''){
			str += `
			specification2.mode_work = '${req.body.mode_work}' 
			AND `;
		}
		if(req.body.dop_rot != ''){
			str += `
			(specification2.nom8 ${req.body.dop_rot} 
			OR specification2.nom10 ${req.body.dop_rot} 
			OR specification2.nom12_5 ${req.body.dop_rot} 
			OR specification2.nom16 ${req.body.dop_rot} 
			OR specification2.nom20 ${req.body.dop_rot} 
			OR specification2.nom25 ${req.body.dop_rot} 
			OR specification2.nom31_5 ${req.body.dop_rot} 
			OR specification2.nom40 ${req.body.dop_rot} 
			OR specification2.nom50 ${req.body.dop_rot}) 
			AND `;
		}
		
		
		
				let nm = str.lastIndexOf('AND');
				str = str.substr(0, nm);
				str+=';';
		console.log('ЗАПРОС: ');
		console.log(str);
		
		console.log(req.body);
		
		let rows = connection.manyOrNone(str);
		let data = await rows;
		console.log(data);
		res.send(await rows);
	}catch(err){
		console.log(err);
	}
});

module.exports = router;