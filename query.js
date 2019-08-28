const connection = require('./db');

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE reducer (
// 			id SERIAL PRIMARY KEY,
// 			stamp varchar(30),
// 			image varchar(50),
// 			id_destination int,
// 			id_cond_of_use int,
// 			id_drawing int,
// 			id_parameters int,
// 			id_assembly_var int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE specifications (
// 			id SERIAL PRIMARY KEY,
// 			id_reducer int,
// 			rotation_freq int,
// 			mode_work varchar(10),
// 			nom8 int,
// 			nom10 int,
// 			nom12_5 int,
// 			nom16 int,
// 			nom20 int,
// 			nom25 int,
// 			nom31_5 int,
// 			nom40 int,
// 			nom50 int,
// 			val int,
// 			val1 int,
// 			val2 int,
// 			val3 int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE stamp (
// 			id SERIAL PRIMARY KEY,
// 			id_reducer int,
// 			type varchar(50),
// 			axis_distance int,
// 			nom_ratio float,
// 			build_opt int,
// 			shaft_end varchar(1),
// 			clim_ver varchar(1),
// 			accom_category int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE conditions (
// 			id SERIAL PRIMARY KEY,
// 			cond_of_use text
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE assembly_var (
// 			id SERIAL PRIMARY KEY,
// 			variant varchar(50)
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		INSERT INTO destination (destination) VALUES ('
// 		Редукторы Ц2У-Н зубчатые цилиндрические двухступенчатые узкие горизонтальные общего назначения служат для увеличения крутящих моментов и уменьшения частоты вращения. Редукторы применяются в районах с умеренным климатом (исполнение У), сухим и влажным тропическим климатом (исполнение Т), категорий размещения 1, 2, 3, 4 (работа на открытом воздухе под навесом, в закрытых помещениях и помещениях с регулируемым климатом).
// 		');
// 		`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		UPDATE destination SET destination = 'Редукторы Ц2У-Н зубчатые цилиндрические двухступенчатые узкие горизонтальные общего назначения служат для увеличения крутящих моментов и уменьшения частоты вращения. Редукторы применяются в районах с умеренным климатом (исполнение У), сухим и влажным тропическим климатом (исполнение Т), категорий размещения 1, 2, 3, 4 (работа на открытом воздухе под навесом, в закрытых помещениях и помещениях с регулируемым климатом).';
// 		`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		INSERT INTO conditions (cond_of_use) VALUES ('Нагрузка постоянная и переменная, одного направления и реверсивная;
// 		Работа постоянная и с периодическими остановками;
// 		Вращение валов в любую сторону, частота вращения быстроходного вала до 1500 об/мин.');
// 		`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();


// (async function createTable(){
// 	try{
// 		let res = connection.manyOrNone(`
// 		SELECT 2+2`);
// 		console.log('query success');
// 		console.log(res);
// 	}catch(err){
// 		console.log(err);
// 	}
// })();



// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE parameters (
// 			id SERIAL PRIMARY KEY,
// 			awb int,
// 			awt int,
// 			a int,
// 			a1 int,
// 			a2 int,
// 			b int,
// 			h int,
// 			h1 int,
// 			h2 int,
// 			l1 int,
// 			l2 int,
// 			l3 int,
// 			l4 int,
// 			l5 int,
// 			b1 int,
// 			b2 int,
// 			d1 VARCHAR(10),
// 			d2 int,
// 			d3 int,
// 			nh1 int,
// 			nh2 int,
// 			nl1 int,
// 			nl2 int,
// 			t1 int,
// 			t2 int,
// 			capacity int,
// 			weight int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();


// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE specifications2 (
// 			id SERIAL PRIMARY KEY,
// 			id_reducer int,
// 			nom_numbers VARCHAR(100),
// 			nom_spin int,
// 			in_sh int,
// 			out_sh int,
// 			obiom VARCHAR(6),
// 			weg int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();


// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE parameters2 (
// 			id SERIAL PRIMARY KEY,
// 			awb int,
// 			awn int,
// 			awt int,
// 			a int,
// 			a1 int,
// 			b int,
// 			b1 int,
// 			h int,
// 			h1 int,
// 			h2 int,
// 			l1 int,
// 			l2 int,
// 			l3 int,
// 			l4 int,
// 			l5 int,
// 			l6 int,
// 			l7 int,
// 			nb1 int,
// 			nb2 int,
// 			d1 int,
// 			d2 int,
// 			d3 VARCHAR(10),
// 			d4 VARCHAR(10),
// 			d5 int,
// 			d6 VARCHAR(10),
// 			d7 int,
// 			d8 int,
// 			nh1 int,
// 			nh2 int,
// 			nh3 int,
// 			nh4 int,
// 			nl1 int,
// 			nl2 int,
// 			nl3 int,
// 			nl4 int,
// 			t1 VARCHAR(10),
// 			t2 VARCHAR(10),
// 			v VARCHAR(10),
// 			weight int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();






















//NEW SPEC

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE reducer (
// 			id SERIAL PRIMARY KEY,
// 			stamp varchar(30),
// 			image varchar(50),
// 			id_destination int,
// 			id_condition int,
// 			id_drawing int,
// 			id_parameters int,
// 			id_assembly_var int,
// 			id_specification int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE condition (
// 			id SERIAL PRIMARY KEY,
// 			condition text
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE assembly_var (
// 			id SERIAL PRIMARY KEY,
// 			variant varchar(50)
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE drawing (
// 			id SERIAL PRIMARY KEY,
// 			drawing varchar(50)
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE destination (
// 			id SERIAL PRIMARY KEY,
// 			destination text
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();


// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE parameters (
// 			id SERIAL PRIMARY KEY,
// 			awb int,
// 			awt int,
// 			a int,
// 			a1 int,
// 			a2 int,
// 			b int,
// 			h int,
// 			h1 int,
// 			h2 int,
// 			l1 int,
// 			l2 int,
// 			l3 int,
// 			l4 int,
// 			l5 int,
// 			b1 int,
// 			b2 int,
// 			d1 VARCHAR(10),
// 			d2 int,
// 			d3 int,
// 			nh1 int,
// 			nh2 int,
// 			nl1 int,
// 			nl2 int,
// 			t1 int,
// 			t2 int,
// 			capacity int,
// 			weight int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE parameters2 (
// 			id SERIAL PRIMARY KEY,
// 			awb int,
// 			awn int,
// 			awt int,
// 			a int,
// 			a1 int,
// 			b int,
// 			b1 int,
// 			h int,
// 			h1 int,
// 			h2 int,
// 			l1 int,
// 			l2 int,
// 			l3 int,
// 			l4 int,
// 			l5 int,
// 			l6 int,
// 			l7 int,
// 			nb1 int,
// 			nb2 int,
// 			d1 int,
// 			d2 int,
// 			d3 VARCHAR(10),
// 			d4 VARCHAR(10),
// 			d5 int,
// 			d6 VARCHAR(10),
// 			d7 int,
// 			d8 int,
// 			nh1 int,
// 			nh2 int,
// 			nh3 int,
// 			nh4 int,
// 			nl1 int,
// 			nl2 int,
// 			nl3 int,
// 			nl4 int,
// 			t1 VARCHAR(10),
// 			t2 VARCHAR(10),
// 			v VARCHAR(10),
// 			weight int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE specification (
// 			id SERIAL PRIMARY KEY,
// 			gear_ratio VARCHAR(100),
// 			axis_distance int,
// 			nom_rot int,
// 			in_sh int,
// 			out_sh int,
// 			kpd VARCHAR(10),
// 			weight int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.manyOrNone(`
// 			SELECT 
// 				reducer.id 
// 			FROM 
// 				reducer, specification 
// 			WHERE 
// 				reducer.id_specification = specification.id AND specification.weight > 1000;
// 		`);
// 		let data = await res;
// 		console.log(res);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();

// (async function createTable(){
// 	try{
// 		let res = connection.none(`
// 		CREATE TABLE specification2 (
// 			id SERIAL PRIMARY KEY,
// 			id_reducer int,
// 			rotation_freq int,
// 			mode_work varchar(10),
// 			nom8 int,
// 			nom10 int,
// 			nom12_5 int,
// 			nom16 int,
// 			nom20 int,
// 			nom25 int,
// 			nom31_5 int,
// 			nom40 int,
// 			nom50 int
// 		)`);
// 		console.log('query success');
// 	}catch(err){
// 		console.log(err);
// 	}
// })();