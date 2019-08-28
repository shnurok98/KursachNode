let reducers = {};
let qReducers = [];
let spec;
let spec2;
let cId;
let headers = new Headers();
headers.append("Content-Type", "application/json");




async function onGetReducers(){
	try{
		let res = await fetch(`http://localhost:3000/reducer`);
		let data = await res.json();
		reducers = await data;
		createBoxes();
	}catch(err){
		console.log(err);
	}
}

async function onDeleteReducerById(id){
	try{
		let res = await fetch(`http://localhost:3000/reducer/${id}`, {method: "DELETE", headers: headers});
	}catch(err){
		console.log(err);
	}
}

async function onGetService(obj){
	try{
		let json;
		json = JSON.stringify(obj);
		let res = await fetch(`http://localhost:3000/service`, {method: "POST", body: json, headers: headers});
		let data = await res.json();
		cId = [];
		if(obj.rotation_freq != '' || obj.dop_rot != '' || obj.mode_work != ''){
			let res2 = await fetch(`http://localhost:3000/service/spec2`, {method: "POST", body: json, headers: headers});
			let data2 = await res2.json();
			cId = await data2;
		}
		reducers = [];
		let strGearRatio = obj.gear_ratio;
		let numGearRatio = +strGearRatio.substr(1, strGearRatio.length);
		if(strGearRatio != "" || obj.type != undefined){
			console.log('Voshel');
			for(let i = 0; i < data.length; i++){
				let numStamp = data[i].stamp[1];
				console.log('obj.type = ' + obj.type);
				console.log('data st = ' + numStamp);

				if(obj.type != undefined){
					if(obj.type != numStamp){
						continue;
					}else{
						if(strGearRatio != ""){
							let str = data[i].gear_ratio;
							let ar = str.split(';');
							for(let j = 0; j < ar.length; j++){
								ar[j] = Number(ar[j]);
								// Если хотя бы одно число нашлось ++qReducers
								switch(strGearRatio[0]){
									case '>':
										if(ar[j] >  numGearRatio){
											reducers.push(data[i]);
											j = ar.length;
										}
										break;
									case '<':
										if(ar[j] <  numGearRatio){
											reducers.push(data[i]);
											j = ar.length;
										}
										break;
									case '=':
										if(ar[j] ==  numGearRatio){
											reducers.push(data[i]);
											j = ar.length;
										}
										break;
								}
							}
							console.log(ar);
						}else{
							reducers.push(data[i]);
						}
					}
				}else{
					if(strGearRatio != ""){
						let str = data[i].gear_ratio;
						let ar = str.split(';');
						for(let j = 0; j < ar.length; j++){
							ar[j] = Number(ar[j]);
							// Если хотя бы одно число нашлось ++qReducers
							switch(strGearRatio[0]){
								case '>':
								if(ar[j] >  numGearRatio){
									reducers.push(data[i]);
									j = ar.length;
								}
								break;
								case '<':
								if(ar[j] <  numGearRatio){
									reducers.push(data[i]);
									j = ar.length;
								}
								break;
								case '=':
								if(ar[j] ==  numGearRatio){
									reducers.push(data[i]);
									j = ar.length;
								}
								break;
							}
						}
						console.log(ar);
					}
				}

				// if(strGearRatio != ""){
				// 	let str = data[i].gear_ratio;
				// 	let ar = str.split(';');
				// 	for(let j = 0; j < ar.length; j++){
				// 		ar[j] = Number(ar[j]);
				// 		// Если хотя бы одно число нашлось ++qReducers
				// 		switch(strGearRatio[0]){
				// 			case '>':
				// 			if(ar[j] >  numGearRatio){
				// 				qReducers.push(data[i]);
				// 				j = ar.length;
				// 			}
				// 			break;
				// 			case '<':
				// 			if(ar[j] <  numGearRatio){
				// 				qReducers.push(data[i]);
				// 				j = ar.length;
				// 			}
				// 			break;
				// 			case '=':
				// 			if(ar[j] ==  numGearRatio){
				// 				qReducers.push(data[i]);
				// 				j = ar.length;
				// 			}
				// 			break;
				// 		}
				// 	}
				// console.log(ar);
				// }
			}
		}else{
			reducers = await data;
		}
		// qReducers = await data;
		chkArray();
		onUpdBox(reducers);
		console.log('SERVICE ANSWER: ');
		console.log(data);
		console.log('FILTER GEAR ANSWER: ');
		console.log(reducers);
	}catch(err){
		console.log(err);
	}
}

function chkArray(){
	if(cId.length != 0){
		for(let i = 0; i < reducers.length; i++){
			let tf = false;
			for(let j = 0; j < cId.length; j++){
				if(reducers[i].id == cId[j].id){
					tf = true;
					console.log('Редуктор прошел по ID: ' + reducers[i].id);
					break;
				}
			}
			if(tf == false){
				console.log('Редуктор удален: ' + reducers[i].id);
				// delete reducers[i];
				reducers[i] = null;
			}
		}
		
		// for(let i = 0; i < reducers.length; i++){
		// 	console.log(reducers[i]);
		// 	if(reducers[i] == undefined){
		// 		console.log('del');
		// 		reducers.splice(i, 1);
		// 	}
		// }
		while(reducers.indexOf(null) != -1){
			// console.log('ekk');
			reducers.splice(reducers.indexOf(null), 1);
		}
	}
}

function onUpdBox(obj){
	$('.main').empty();
	let tempchk = obj[0].id;
	for(let i = 0; i < obj.length; i++){
		let lnk;
		if(i > 0){
			if(obj[i].id == tempchk){
				continue;
			}else{
				tempchk = obj[i].id;
			}
		}
		if(obj[i].stamp[1] == '2'){
			lnk = `reducer.html?r=${obj[i].id}`;
		}else if(obj[i].stamp[1] == '3'){
			lnk = `reducer2.html?r=${obj[i].id}`;
		}
		$('.main').append(`
			<a href="${lnk}" oncontextmenu="onContextMenu(${i}); return false;">
			<div class="box b${i}">
			<b>${obj[i].stamp}</b>
			</div>
			</a>
			`);
		$('.b'+i).css({'background-image': 'url(' + obj[i].image + ')'});
	}
}

function onFilter(){
	//Фильтрация по выборке
	let form = new FormData(document.getElementById('filterForm'));

	//FormData-->JSON
	let formObj = {};
	form.forEach(function(value, key){
	    formObj[key] = value;
	});
	onGetService(formObj);
	console.log(formObj);
	// var json = JSON.stringify(object);
	console.log('Filter is up');
}

window.onload = function(){
	onGetReducers();
	let polzovatel = getCookie('user');
	$('#logout i').empty();
	$('#logout i').text('Пользователь: ' + polzovatel + ', ');
	// $('#kostyl').click(function(){
	// 	console.log('fck');
	// 	$('#editMenu').css({'display': 'none'});
	// 	$('#deleteMenu').css({'display': 'none'});
	// });

}

function closeAction(){$('.invMenu').css({'display': 'none'});}

function closeContMenu(){$('.cont_menu').css({'display': 'none'});}

function onActionPanel(arg){
	let menu;
	switch(arg){
		case 'c':
		console.log('CREATE');
			$('.invMenu').css({'display': 'none'});
			menu = $('#createMenu');
			menu.css({'display': 'block'});
			menu.empty();
			menu.append(`<p>Выберите тип <br>редуктора для создания:</p>`);
			menu.append(`<a href="edit.html">Двухступенчатый</a><br>`);
			menu.append(`<a href="edit2.html">Трехступенчатый</a>`);
			menu.append(`<button type="button" class="closeBtn" onclick="closeAction()">`);
			break;
		case 'e':
		console.log('EDIT');
			$('.invMenu').css({'display': 'none'});
			menu = $('#editMenu');
			menu.css({'display': 'block'});
			menu.empty();
			menu.append(`<p>Выберите редуктор для изменения:</p>`);
			menu.append(`<ul>`);
			for(let i = 0; i < reducers.length; i++){
				if(reducers[i].stamp[1] == '2'){
					menu.append(`
						<li><a href="editwith.html?r=${reducers[i].id}">${reducers[i].stamp}</a></li>
					`);
				}else{
					menu.append(`
						<li><a href="edit2with.html?r=${reducers[i].id}">${reducers[i].stamp}</a></li>
					`);
				}
			}
			menu.append(`</ul>`);
			menu.append(`<button type="button" class="closeBtn" onclick="closeAction()">`);
			break;
		case 'd':
		console.log('DELETE');
			$('.invMenu').css({'display': 'none'});
			menu = $('#deleteMenu');
			menu.css({'display': 'block'});
			menu.empty();
			menu.append(`<p>Выберите редуктор для удаления:</p>`);
			menu.append(`<ul>`);
			for(let i = 0; i < reducers.length; i++){
				menu.append(`
					<li><a href="#" onclick="onDeleteReducerById(${reducers[i].id})">${reducers[i].stamp}</a></li>
				`);
			}
			menu.append(`</ul>`);
			menu.append(`<button type="button" class="closeBtn" onclick="closeAction()">`);
			break;
		default: console.error('This action not found');
	}
}

function createBoxes(){
	for(let i = 0; i < reducers.length; i++){
		let lnk;
		if(reducers[i].stamp[1] == '2'){
			lnk = `reducer.html?r=${reducers[i].id}`;
		}else if(reducers[i].stamp[1] == '3'){
			lnk = `reducer2.html?r=${reducers[i].id}`;
		}
		$('.main').append(`
			<a href="${lnk}" oncontextmenu="onContextMenu(${i}); return false;">
			<div class="box b${i}">
				<b>${reducers[i].stamp}</b>
			</div>
			</a>
		`);
		$('.b'+i).css({'background-image': 'url(' + reducers[i].image + ')'});
	}
}


function onContextMenu(i){
	let contMenu = $('.cont_menu');
	contMenu.empty();
	contMenu.append(`<h4>Редуктор ${reducers[i].stamp}</h4><h5>Технические характеристики</h5>`);
	if(reducers[i].stamp[1] == '2'){
		contMenu.append(`
			<table class="minis" id="miniSpec">
					<tr>
						<td rowspan="2">
							Частота вращения <br> быстроходного вала, <br>об/мин
						</td>
						<td rowspan="2">
							Режим <br> работы
						</td>
						<td colspan="9">
							Передаточное число (номинальное)
						</td>
					</tr>
					<tr>
						<td>
							8
						</td>
						<td>
							10
						</td>
						<td>
							12,5
						</td>
						<td>
							16
						</td>
						<td>
							20
						</td>
						<td>
							25
						</td>
						<td>
							31,5
						</td>
						<td>
							40
						</td>
						<td>
							50
						</td>
					</tr>
				</table>
		`);
		onGetSpec2(reducers[i].id);
	}
	contMenu.append(`
		<table class="minis" id="miniSpec2">
				<tr>
					<td>
						Параметр
					</td>
					<td>
						Редуктор
					</td>
				</tr>
				<tr>
					<td>
						Номинальные передаточные числа
					</td>
					<td id="gear_ratio">
						
					</td>
				</tr>
				<tr>
					<td>
						Межосевое расстояние, мм
					</td>
					<td id="axis_distance">
						
					</td>
				</tr>
				<tr>
					<td>
						Номинальный крутящий момент, Н*м
					</td>
					<td id="nom_rot">
						
					</td>
				</tr>
				<tr>
					<td colspan="2">
						Допускаемая радиальная нагрузка, Н:
					</td>
				</tr>
				<tr>
					<td>
						на входном валу
					</td>
					<td id="in_sh">
						
					</td>
				</tr>
				<tr>
					<td>
						на выходном валу
					</td>
					<td id="out_sh">
						
					</td>
				</tr>
				<tr>
					<td>
						КПД
					</td>
					<td id="kpd">
						
					</td>
				</tr>
				<tr>
					<td>
						Масса, кг
					</td>
					<td name="weight">
						
					</td>
				</tr>
			</table>
	`);
	// console.log("Red ID: " + i);
	onGetSpec(reducers[i].id_specification);
	contMenu.css({'display': 'block'});





	contMenu.append(`<button type="button" class="closeBtn" onclick="closeContMenu()">`);
}

async function onGetSpec(id){
	try{
		let res = await fetch(`http://localhost:3000/specification/${id}`);
		let data = await res.json();
		spec = await data;

		$('#gear_ratio').text(data.gear_ratio);
		$('#nom_rot').text(data.nom_rot);
		$('#in_sh').text(data.in_sh);
		$('#out_sh').text(data.out_sh);
		$('[name=weight]').text(data.weight);
		$('#axis_distance').text(data.axis_distance);
		$('#kpd').text(data.kpd);
		
		
		// console.log(specification);
	}catch(err){
		console.log(err);
	}
}

async function onGetSpec2(idR){
	try{
		let res = await fetch(`http://localhost:3000/specification2/filter/${idR}`);
		let data = await res.json();
		spec2 = await data;
		let temp_freq = await data[0].rotation_freq;
		//create main
		// $('#spec2').append(`
		// 	<tr><td rowspan="4">${temp_freq}</td></tr>
		// `);
		
		for(let i = 0; i < data.length; i++){
			if(i % 4 == 0){
				temp_freq = data[i].rotation_freq;
				$('#miniSpec').append(`
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
				$('#miniSpec').append(`
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
		// console.log(specification2);
	}catch(err){
		console.log(err);
	}
}

function printSmth(){
	window.print();
}