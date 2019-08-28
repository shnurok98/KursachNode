# БД редукторов

Курсовая работа (май 2018 года). 

## Настройка

Пример файла config.js:
```js
	let config = {};

	config.connectionString = {
		host: 'localhost',
		port: 5432,
		database: 'kursach',
		user: 'postgres',
		password: '12345'
	};

	module.exports = config;
```