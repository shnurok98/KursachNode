let reducer = {};
let destination;
let condition;
let drawing;
let parameters = {};
let specification = {};
let specification2 = {};
let assembly_var;

let headers = new Headers();
headers.append("Content-Type", "application/json");


async function onGetReducer(id){
	try{
		let res = await fetch(`http://localhost:3000/reducer/${id}`);
		let data = await res.json();
		reducer = await data;
		$('h2').append(`${data.stamp}`);
		$('#stampR').val(data.stamp);

		$('#linkImageR').val(data.image);
		console.log(reducer);
		onGetDestination(data.id_destination);
		onGetCondition(data.id_condition);
		onGetSpec(data.id_specification);
		onGetDrawing(data.id_drawing);
		if(locUrl == 'file:///C:/Users/admin/Desktop/KursachNode/client/editwith.html'){
			onGetParameters(data.id_parameters);
			onGetSpec2(data.id);
		}else{
			onGetParameters2(data.id_parameters);
		}
		onGetAsVar(data.id_assembly_var);
	}catch(err){
		console.log(err);
	}
}

async function onGetSpec2(idR){
	try{
		let res = await fetch(`http://localhost:3000/specification2/filter/${idR}`);
		let data = await res.json();
		specification2 = await data;
		let temp_freq = await data[0].rotation_freq;
		//create main
		// $('.spec_table').append(`
		// 	<tr><td rowspan="4">${temp_freq}</td></tr>
		// `);
		let fr = -4;
		for(let i = 0; i < data.length; i++){
			if(i % 4 == 0){
				fr+=4;
				temp_freq = data[i].rotation_freq;
				$('#spec2').append(`
					<tr>
						<td rowspan="4">
							<input type="number" name="rotation_freq-${fr}" value="${temp_freq}">
						</td>
						<td>
							<input type="text" name="mode_work-${i}" value="${data[i].mode_work}">
						</td>
						<td>
							<input type="number" name="nom8-${i}" value="${data[i].nom8}">
						</td>
						<td>
							<input type="number" name="nom10-${i}" value="${data[i].nom10}">
						</td>
						<td>
							<input type="number" name="nom12_5-${i}" value="${data[i].nom12_5}">
						</td>
						<td>
							<input type="number" name="nom16-${i}" value="${data[i].nom16}">
						</td>
						<td>
							<input type="number" name="nom20-${i}" value="${data[i].nom20}">
						</td>
						<td>
							<input type="number" name="nom25-${i}" value="${data[i].nom25}">
						</td>
						<td>
							<input type="number" name="nom31_5-${i}" value="${data[i].nom31_5}">
						</td>
						<td>
							<input type="number" name="nom40-${i}" value="${data[i].nom40}">
						</td>
						<td>
							<input type="number" name="nom50-${i}" value="${data[i].nom50}">
						</td>
					</tr>
				`);
			}else{
				$('#spec2').append(`
					<tr>
						<td>
							<input type="text" name="mode_work-${i}" value="${data[i].mode_work}">
						</td>
						<td>
							<input type="number" name="nom8-${i}" value="${data[i].nom8}">
						</td>
						<td>
							<input type="number" name="nom10-${i}" value="${data[i].nom10}">
						</td>
						<td>
							<input type="number" name="nom12_5-${i}" value="${data[i].nom12_5}">
						</td>
						<td>
							<input type="number" name="nom16-${i}" value="${data[i].nom16}">
						</td>
						<td>
							<input type="number" name="nom20-${i}" value="${data[i].nom20}">
						</td>
						<td>
							<input type="number" name="nom25-${i}" value="${data[i].nom25}">
						</td>
						<td>
							<input type="number" name="nom31_5-${i}" value="${data[i].nom31_5}">
						</td>
						<td>
							<input type="number" name="nom40-${i}" value="${data[i].nom40}">
						</td>
						<td>
							<input type="number" name="nom50-${i}" value="${data[i].nom50}">
						</td>
					</tr>
				`);
			}
		}
		console.log(specification2);
	}catch(err){
		console.log(err);
	}
}

async function onGetDestination(id){
	try{
		let res = await fetch(`http://localhost:3000/destination/${id}`);
		let data = await res.json();
		destination = await data.destination;
		$('#destR').val(data.destination);
		console.log(destination);
	}catch(err){
		console.log(err);
	}
}

async function onGetCondition(id){
	try{
		let res = await fetch(`http://localhost:3000/condition/${id}`);
		let data = await res.json();
		condition = await data.condition;
		$('#condR').val(data.condition);
		console.log(condition);
	}catch(err){
		console.log(err);
	}
}

async function onGetDrawing(id){
	try{
		let res = await fetch(`http://localhost:3000/drawing/${id}`);
		let data = await res.json();
		drawing = await data.drawing;
		$('#linkDrawingR').val(data.drawing);
		console.log(drawing);
	}catch(err){
		console.log(err);
	}
}

async function onGetSpec(id){
	try{
		let res = await fetch(`http://localhost:3000/specification/${id}`);
		let data = await res.json();
		specification = await data;
		$('#gear_ratio').val(data.gear_ratio);
		$('#nom_rot').val(data.nom_rot);
		$('#in_sh').val(data.in_sh);
		$('#out_sh').val(data.out_sh);
		$('#axis_distance').val(data.axis_distance);
		$('#kpd').val(data.kpd);
		$('[name=weight]').val(data.weight);
		console.log(specification);
	}catch(err){
		console.log(err);
	}
}

async function onGetParameters(id){
	try{
		let res = await fetch(`http://localhost:3000/parameters/${id}`);
		let data = await res.json();
		parameters = await data;

		$('#par1').append(`
			<tr>
				<td>
					<input type="number" name="awb" value="${data.awb}">
				</td>
				<td>
					<input type="number" name="awt" value="${data.awt}">
				</td>
				<td>
					<input type="number" name="a" value="${data.a}">
				</td>
				<td>
					<input type="number" name="a1" value="${data.a1}">
				</td>
				<td>
					<input type="number" name="a2" value="${data.a2}">
				</td>
				<td>
					<input type="number" name="b" value="${data.b}">
				</td>
				<td>
					<input type="number" name="h" value="${data.h}">
				</td>
				<td>
					<input type="number" name="h1" value="${data.h1}">
				</td>
				<td>
					<input type="number" name="h2" value="${data.h2}">
				</td>
				<td>
					<input type="number" name="l1" value="${data.l1}">
				</td>
				<td>
					<input type="number" name="l2" value="${data.l2}">
				</td>
				<td>
					<input type="number" name="l3" value="${data.l3}">
				</td>
				<td>
					<input type="number" name="l4" value="${data.l4}">
				</td>
				<td>
					<input type="number" name="l5" value="${data.l5}">
				</td>
			</tr>
		`);
			
		$('#par2').append(`
			<tr>
				<td>
					<input type="number" name="b1" value="${data.b1}">
				</td>
				<td>
					<input type="number" name="b2" value="${data.b2}">
				</td>
				<td>
					<input type="text" name="d1" value="${data.d1}">
				</td>
				<td>
					<input type="number" name="d2" value="${data.d2}">
				</td>
				<td>
					<input type="number" name="d3" value="${data.d3}">
				</td>
				<td>
					<input type="number" name="nh1" value="${data.nh1}">
				</td>
				<td>
					<input type="number" name="nh2" value="${data.nh2}">
				</td>
				<td>
					<input type="number" name="nl1" value="${data.nl1}">
				</td>
				<td>
					<input type="number" name="nl2" value="${data.nl2}">
				</td>
				<td>
					<input type="number" name="t1" value="${data.t1}">
				</td>
				<td>
					<input type="number" name="t2" value="${data.t2}">
				</td>
				<td>
					<input type="number" name="capacity" value="${data.capacity}">
				</td>
				<td>
					<input type="number" name="weight" value="${data.weight}">
				</td>
			</tr>
		`);
			
		
		// console.log('THIS PARAM: ' + data.awb);
	}catch(err){
		console.log(err);
	}
}

async function onGetParameters2(id){
	try{
		let res = await fetch(`http://localhost:3000/parameters2/${id}`);
		let data = await res.json();
		parameters = await data;

		$('#awb').val(data.awb);
		$('#awn').val(data.awn);
		$('#awt').val(data.awt);
		$('#a').val(data.a);
		$('#a1').val(data.a1);
		$('#b').val(data.b);
		$('#b1').val(data.b1);
		$('#h').val(data.h);
		$('#h1').val(data.h1);
		$('#h2').val(data.h2);
		$('#l1').val(data.l1);
		$('#l2').val(data.l2);
		$('#l3').val(data.l3);
		$('#l4').val(data.l4);
		$('#l5').val(data.l5);
		$('#l6').val(data.l6);
		$('#l7').val(data.l7);
		$('#nb1').val(data.nb1);
		$('#nb2').val(data.nb2);
		$('#d1').val(data.d1);
		$('#d2').val(data.d2);
		$('#d3').val(data.d3);
		$('#d4').val(data.d4);
		$('#d5').val(data.d5);
		$('#d6').val(data.d6);
		$('#d7').val(data.d7);
		$('#d8').val(data.d8);
		$('#nh1').val(data.nh1);
		$('#nh2').val(data.nh2);
		$('#nh3').val(data.nh3);
		$('#nh4').val(data.nh4);
		$('#nl1').val(data.nl1);
		$('#nl2').val(data.nl2);
		$('#nl3').val(data.nl3);
		$('#nl4').val(data.nl4);
		$('#t1').val(data.t1);
		$('#t2').val(data.t2);
		$('#v').val(data.v);
		$('#weight').val(data.weight);
			
		
		// console.log('THIS PARAM: ' + data.awb);
	}catch(err){
		console.log(err);
	}
}

async function onGetAsVar(id){
	try{
		let res = await fetch(`http://localhost:3000/assembly_var/${id}`);
		let data = await res.json();
		assembly_var = await data.variant;
		$('#linkVarR').val(data.variant);
		console.log(assembly_var);
	}catch(err){
		console.log(err);
	}
}
let str = location.search;
str = str.replace('?r=', '');
let id = Number(str);
onGetReducer(id);

window.onload = function(){
	
}

let tableFormObj = {};



function onUpdateReducer(){
	let form = new FormData(document.getElementById('reducerForm'));

	//FormData-->JSON
	let formObj = {};
	form.forEach(function(value, key){
	    formObj[key] = value;
	});

	// var json = JSON.stringify(object);
	console.log(formObj);
	

	qUpdateDest(formObj);
	qUpdateCond(formObj);
	qUpdateDraw(formObj);
	qUpdateAsmVar(formObj);
	
	let tableForm = new FormData(document.getElementById('tableForm'));

	tableForm.forEach(function(value, key){
		if(key[0] === 'd' || key === 'kpd' || key === 'gear_ratio' || key === 'd3' || key[0] === 't' || key === 'v' || key[0] === 'm'){
	    	tableFormObj[key] = value;
		}else{
			tableFormObj[key] = +value;
		}
	});
	console.log(tableFormObj);
	qUpdateParams(tableFormObj);
	qUpdateSpec(tableFormObj);
	if(locUrl == 'file:///C:/Users/admin/Desktop/KursachNode/client/editwith.html'){
		toQSpec(reducer.id);
	}
	setTimeout(qUpdateReducer, 1000, formObj);
	// console.log('YY' + reducer.id_destination);
}

async function qUpdateDest(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/destination/${reducer.id_destination}`, {method: "PUT", body: obj, headers: headers});
	}catch(err){
		console.log(err);
	}
}

async function qUpdateCond(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/condition/${reducer.id_condition}`, {method: "PUT", body: obj, headers: headers});
	}catch(err){
		console.log(err);
	}
}

async function qUpdateDraw(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/drawing/${reducer.id_drawing}`, {method: "PUT", body: obj, headers: headers});
		// let data = await res.json();
		// draw = await data;
		// console.log('Draw return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qUpdateAsmVar(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/assembly_var/${reducer.id_assembly_var}`, {method: "PUT", body: obj, headers: headers});
		
	}catch(err){
		console.log(err);
	}
}

async function qUpdateParams(obj){
	try{
		console.log(obj);
		obj = JSON.stringify(obj);
		if(locUrl == 'file:///C:/Users/admin/Desktop/KursachNode/client/editwith.html'){
			let res = await fetch(`http://localhost:3000/parameters/${reducer.id_parameters}`, {method: "PUT", body: obj, headers: headers});
		}else{
			let res = await fetch(`http://localhost:3000/parameters2/${reducer.id_parameters}`, {method: "PUT", body: obj, headers: headers});
		}
		
		// let data = await res.json();
		// params = await data;
		// console.log('Params return: ' + data);
	}catch(err){
		console.log(err);
	}
}

async function qUpdateReducer(f1){
	try{
		let json = {
			'stamp': f1.stamp,
			'image': f1.image,
			'id_destination': +reducer.id_destination,
			'id_condition': +reducer.id_condition,
			'id_drawing': +reducer.id_drawing,
			'id_parameters': +reducer.id_parameters,
			'id_assembly_var': +reducer.id_assembly_var,
			'id_specification': +reducer.id_specification
		};
		json = JSON.stringify(json);
		let res = await fetch(`http://localhost:3000/reducer/${reducer.id}`, {method: "PUT", body: json, headers: headers});
		
	}catch(err){
		console.log(err);
	}
}

async function qUpdateSpec(obj){
	try{
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/specification/${reducer.id_specification}`, {method: "PUT", body: obj, headers: headers});
		console.log('success');
		// let data = await res.json();
		// spec = await data;
		// console.log('Spec return: ' + data);
	}catch(err){
		console.log(err);
	}
}


function toQSpec(id){
	let tempObj = {};
	let fr = -4;
	for(let i = 0; i < 16; i++){
		if(i % 4 == 0){
			fr+=4;
		}
		console.log('ID reducer: ' + id);
		// console.log(specifications);
		// alert('stop');
		tempObj.id = specification2[i].id,
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
		qUpdateSpec2(tempObj);
	}
}

async function qUpdateSpec2(obj){
	try{
		// obj.id_reducer = reducer_id;
		console.log('Upd spec: ' + obj.id);
		let idSpec = obj.id
		obj = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/specification2/${idSpec}`, {method: "PUT", body: obj, headers: headers});
		console.log('success');
		// let data = await res.json();
		// spec = await data;
		// console.log('Spec return: ' + data);
	}catch(err){
		console.log('ERROR: scUpRed/qUpdateSpec2');
		console.log(err);
	}
}