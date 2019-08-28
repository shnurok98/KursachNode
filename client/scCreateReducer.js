let headers = new Headers();
headers.append("Content-Type", "application/json");


let dest = {};
let cond = {};
let draw = {};
let asmvar = {};

let spec = {};
let spec2 = {};
let params = {};

let tableFormObj = {};

let reducer_id;
function onCreateReducer(){
	let form = new FormData(document.getElementById('reducerForm'));

	//FormData-->JSON
	let formObj = {};
	form.forEach(function(value, key){
	    formObj[key] = value;
	});

	// var json = JSON.stringify(object);
	console.log(formObj);
	

	qCreateDest(formObj);
	qCreateCond(formObj);
	qCreateDraw(formObj);
	qCreateAsmVar(formObj);
	console.log('FORM');
	console.log(formObj);

	let tableForm = new FormData(document.getElementById('tableForm'));

	tableForm.forEach(function(value, key){
		if(key[0] === 'd' || key === 'kpd' || key === 'gear_ratio' || key === 'd3' || key[0] === 't' || key === 'v'){
	    	tableFormObj[key] = value;
		}else{
			tableFormObj[key] = +value;
		}
	});
	console.log('TABLE');
	console.log(tableFormObj);
	qCreateParams(tableFormObj);
	qCreateSpec(tableFormObj);
	setTimeout(qCreateReducer, 1000, formObj);
	// qCreateReducer(formObj);
	// let tempObj = {};
	// let fr = -4;
	// for(let i = 0; i < 16; i++){
	// 	if(i % 4 == 0){
	// 		fr+=4;
	// 	}
	// 	tempObj.id_reducer = reducer_id;
	// 	tempObj.rotation_freq = +tableFormObj['rotation_freq-' + fr];
	// 	tempObj.mode_work = String(tableFormObj['mode_work-' + i]);
	// 	tempObj.nom8 = +tableFormObj['nom8-' + i];
	// 	tempObj.nom10 = +tableFormObj['nom10-' + i];
	// 	tempObj.nom12_5 = +tableFormObj['nom12_5-' + i];
	// 	tempObj.nom16 = +tableFormObj['nom16-' + i];
	// 	tempObj.nom20 = +tableFormObj['nom20-' + i];
	// 	tempObj.nom25 = +tableFormObj['nom25-' + i];
	// 	tempObj.nom31_5 = +tableFormObj['nom31_5-' + i];
	// 	tempObj.nom40 = +tableFormObj['nom40-' + i];
	// 	tempObj.nom50 = +tableFormObj['nom50-' + i];
	// 	tempObj.val = +tableFormObj['val'];
	// 	tempObj.val1 = +tableFormObj['val1'];
	// 	tempObj.val2 = +tableFormObj['val2'];
	// 	tempObj.val3 = +tableFormObj['val3'];
	// 	console.log(tempObj);
	// 	qCreateSpec(tempObj);
	// }

}

function toQSpec(id){
	let tempObj = {};
	let fr = -4;
	for(let i = 0; i < 16; i++){
		if(i % 4 == 0){
			fr+=4;
		}
		console.log('ID: ' + id);
		tempObj.id_reducer = id;
		tempObj.rotation_freq = +tableFormObj['rotation_freq-' + fr];
		tempObj.mode_work = String(tableFormObj['mode_work-' + i]);
		tempObj.nom8 = +tableFormObj['nom8-' + i];
		tempObj.nom10 = +tableFormObj['nom10-' + i];
		tempObj.nom12_5 = +tableFormObj['nom12_5-' + i];
		tempObj.nom16 = +tableFormObj['nom16-' + i];
		tempObj.nom20 = +tableFormObj['nom20-' + i];
		tempObj.nom25 = +tableFormObj['nom25-' + i];
		tempObj.nom31_5 = +tableFormObj['nom31_5-' + i];
		tempObj.nom40 = +tableFormObj['nom40-' + i];
		tempObj.nom50 = +tableFormObj['nom50-' + i];
		console.log(tempObj);
		qIterationSpec(tempObj);
	}
}

async function qIterationSpec(obj){
	try{
		// obj.id_reducer = reducer_id;
		console.log('Stop on id_r: ' + obj.id_reducer);
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/specification2`, {method: "POST", body: obj, headers: headers});
		let data = await res.json();
		spec2 = await data;
		console.log('Spec2 return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qCreateReducer(f1){
	try{
		let json = {
			'stamp': f1.stamp,
			'image': f1.image,
			'id_destination': +dest.id,
			'id_condition': +cond.id,
			'id_drawing': +draw.id,
			'id_parameters': +params.id,
			'id_assembly_var': +asmvar.id,
			'id_specification': +spec.id
		};
		json = JSON.stringify(json);
		let res = await fetch(`http://localhost:3000/reducer`, {method: "POST", body: json, headers: headers});
		let data = await res.json();
		reducer_id = await data.id;
		if(locUrl == 'file:///C:/Users/admin/Desktop/KursachNode/client/edit.html'){
			toQSpec(reducer_id);
		}else{
			
		}
		// toQSpec(reducer_id);
		console.log('Reducer return: ' + data.id);
	}catch(err){
		console.log(err);
	}
}

async function qCreateDest(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/destination`, {method: "POST", body: obj, headers: headers});
		let data = await res.json();
		dest = await data;
		console.log('Dest return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qCreateCond(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/condition`, {method: "POST", body: obj, headers: headers});
		let data = await res.json();
		cond = await data;
		console.log('Cond return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qCreateDraw(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/drawing`, {method: "POST", body: obj, headers: headers});
		let data = await res.json();
		draw = await data;
		console.log('Draw return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qCreateAsmVar(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/assembly_var`, {method: "POST", body: obj, headers: headers});
		let data = await res.json();
		asmvar = await data;
		console.log('AsmVar return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qCreateSpec(obj){
	try{
		// obj.id_reducer = reducer_id;
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/specification`, {method: "POST", body: obj, headers: headers});
		let data = await res.json();
		spec = await data;
		console.log('Spec return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qCreateParams(obj){
	try{
		obj = JSON.stringify(obj);
		console.log(locUrl);
		if(locUrl == 'file:///C:/Users/admin/Desktop/KursachNode/client/edit.html'){
			let res = await fetch(`http://localhost:3000/parameters`, {method: "POST", body: obj, headers: headers});
			let data = await res.json();
			params = await data;
		}else{
			let res = await fetch(`http://localhost:3000/parameters2`, {method: "POST", body: obj, headers: headers});
			let data = await res.json();
			params = await data;
		}
		// console.log('Params return: ' + data);
	}catch(err){
		console.log(err);
	}
}
