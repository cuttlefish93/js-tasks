async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	return res.json();
}

getUsers()
	.then((users) => {
		// 1.Преобразовать данные из https://jsonplaceholder.typicode.com/users к виду чтобы укаждого пользователя отобразить только id и username
		const newUsers = users.map((user) => {
			return {
				id: user.id,
				username: user.username,
			};
		});
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 2.Получить из данных выше список всех эмейлов
		const newUsers = users.map((user) => user.email);
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 3.Вывести пользователя с id === 9
		const newUsers = users.find((user) => user.id === 9);
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 4.Вывести всех пользователей из города 'Lebsackbury'
		const newUsers = users.filter(
			(user) => user.address.city === 'Lebsackbury',
		);
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 5.Вывести первых 5 пользователей
		const newUsers = users.slice(0, 5);
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 6.Вывести всех пользователей в обратном порядке
		const newUsers = users.reverse();
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 7.Посчитать сколько всего пользователей
		const newUsers = users.length;
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 8.Вывести список вебсайтов пользователей которые содержат '.com'
		const newUsers = users.filter((user) => user.website.includes('.com'));
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 9.Вывести все username которые длиннее 12 символов
		const newUsers = users.reduce(
			(acc, user) =>
				user.username.length >= 12 ? [...acc, user.username] : [...acc],
			[],
		);
		console.log(newUsers);
		return users;
	})
	.then((users) => {
		// 10.Привести список всех username где каждый будет в нижнем регистре
		const newUsers = users.map((user) => user.username.toLowerCase());
		console.log(newUsers);
	});
