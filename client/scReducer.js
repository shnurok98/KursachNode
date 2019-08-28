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

function printSmth(){
	window.print();
}

async function onGetReducer(id){
	try{
		let res = await fetch(`http://localhost:3000/reducer/${id}`);
		let data = await res.json();
		reducer = await data;
		$('h2').append(`${data.stamp}`);
		$('.img').append(`<img src="${data.image}">`);
		console.log(reducer);
		onGetDestination(data.id_destination);
		onGetCondition(data.id_condition);
		onGetSpec(data.id_specification);
		onGetDrawing(data.id_drawing);
		if(locUrl == 'file:///C:/Users/admin/Desktop/KursachNode/client/reducer.html'){
			onGetParameters(data.id_parameters);
			onGetSpec2(data.id);
		}else{
			onGetParameters2(data.id_parameters);
		}
		// onGetParameters(data.id_parameters);
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
		// $('#spec2').append(`
		// 	<tr><td rowspan="4">${temp_freq}</td></tr>
		// `);
		
		for(let i = 0; i < data.length; i++){
			if(i % 4 == 0){
				temp_freq = data[i].rotation_freq;
				$('#spec2').append(`
					<tr>
						<td rowspan="4">
							${temp_freq}
						</td>
						<td>
							${data[i].mode_work}
						</td>
						<td>
							${data[i].nom8}
						</td>
						<td>
							${data[i].nom10}
						</td>
						<td>
							${data[i].nom12_5}
						</td>
						<td>
							${data[i].nom16}
						</td>
						<td>
							${data[i].nom20}
						</td>
						<td>
							${data[i].nom25}
						</td>
						<td>
							${data[i].nom31_5}
						</td>
						<td>
							${data[i].nom40}
						</td>
						<td>
							${data[i].nom50}
						</td>
					</tr>
				`);
			}else{
				$('#spec2').append(`
					<tr>
						<td>
							${data[i].mode_work}
						</td>
						<td>
							${data[i].nom8}
						</td>
						<td>
							${data[i].nom10}
						</td>
						<td>
							${data[i].nom12_5}
						</td>
						<td>
							${data[i].nom16}
						</td>
						<td>
							${data[i].nom20}
						</td>
						<td>
							${data[i].nom25}
						</td>
						<td>
							${data[i].nom31_5}
						</td>
						<td>
							${data[i].nom40}
						</td>
						<td>
							${data[i].nom50}
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
		$('.dest').append(`<p>${data.destination}</p>`);
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
		$('.cond').append(`<pre>${data.condition}</pre>`);
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
		$('.draw').append(`<img src="${data.drawing}">`);
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

		$('#gear_ratio').text(data.gear_ratio);
		$('#nom_rot').text(data.nom_rot);
		$('#in_sh').text(data.in_sh);
		$('#out_sh').text(data.out_sh);
		$('[name=weight]').text(data.weight);
		$('#axis_distance').text(data.axis_distance);
		$('#kpd').text(data.kpd);
		
		
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
					${data.awb}
				</td>
				<td>
					${data.awt}
				</td>
				<td>
					${data.a}
				</td>
				<td>
					${data.a1}
				</td>
				<td>
					${data.a2}
				</td>
				<td>
					${data.b}
				</td>
				<td>
					${data.h}
				</td>
				<td>
					${data.h1}
				</td>
				<td>
					${data.h2}
				</td>
				<td>
					${data.l1}
				</td>
				<td>
					${data.l2}
				</td>
				<td>
					${data.l3}
				</td>
				<td>
					${data.l4}
				</td>
				<td>
					${data.l5}
				</td>
			</tr>
		`);
			
		$('#par2').append(`
			<tr>
				<td>
					${data.b1}
				</td>
				<td>
					${data.b2}
				</td>
				<td>
					${data.d1}
				</td>
				<td>
					${data.d2}
				</td>
				<td>
					${data.d3}
				</td>
				<td>
					${data.nh1}
				</td>
				<td>
					${data.nh2}
				</td>
				<td>
					${data.nl1}
				</td>
				<td>
					${data.nl2}
				</td>
				<td>
					${data.t1}
				</td>
				<td>
					${data.t2}
				</td>
				<td>
					${data.capacity}
				</td>
				<td>
					${data.weight}
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

		$('#awb').text(data.awb);
		$('#awn').text(data.awn);
		$('#awt').text(data.awt);
		$('#a').text(data.a);
		$('#a1').text(data.a1);
		$('#b').text(data.b);
		$('#b1').text(data.b1);
		$('#h').text(data.h);
		$('#h1').text(data.h1);
		$('#h2').text(data.h2);
		$('#l1').text(data.l1);
		$('#l2').text(data.l2);
		$('#l3').text(data.l3);
		$('#l4').text(data.l4);
		$('#l5').text(data.l5);
		$('#l6').text(data.l6);
		$('#l7').text(data.l7);
		$('#nb1').text(data.nb1);
		$('#nb2').text(data.nb2);
		$('#d1').text(data.d1);
		$('#d2').text(data.d2);
		$('#d3').text(data.d3);
		$('#d4').text(data.d4);
		$('#d5').text(data.d5);
		$('#d6').text(data.d6);
		$('#d7').text(data.d7);
		$('#d8').text(data.d8);
		$('#nh1').text(data.nh1);
		$('#nh2').text(data.nh2);
		$('#nh3').text(data.nh3);
		$('#nh4').text(data.nh4);
		$('#nl1').text(data.nl1);
		$('#nl2').text(data.nl2);
		$('#nl3').text(data.nl3);
		$('#nl4').text(data.nl4);
		$('#t1').text(data.t1);
		$('#t2').text(data.t2);
		$('#v').text(data.v);
		$('#weight').text(data.weight);
			
		
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
		$('.var').append(`<img src="${data.variant}">`);
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
	// let image = $('.img');
	// image.append(`
	// 	<img src="${reducer.image}">
	// `);
	// let id = +location.search[3] + 1;
	// onGetReducer(id);
	// setTimeout(testPrint, 3000);
}
