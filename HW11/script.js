let animals = [
	['🐭', 'mouse', 'Jerry'],
	['🐹', 'hamster', 'Biscuit'],
	['🐰', 'rabbit', 'Bugs'],
	['🦊', 'fox', 'Mrs. Fox'],
	['🐻', 'bear', 'Paddington']
];

let food = [
	['🍎', 'apple', 10],
	['🍐', 'pear', 12],
	['🍊', 'tangerine', 15],
	['🍋', 'lemon', 5],
	['🍌', 'banana', 7]
];

let universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

debugger;

function getInfo(list = [], tableCaption = 'Table') {
	let trs = [];

	for (let i = 0; i < list.length; i++) {

		let item = list[i];

		let tds = [];

		for (let j = 0; j < item.length; j++) {
			tds.push(`<td>${Array.isArray(item[j]) ? item[j].join('; ') : item[j]}</td>`)
		}

		trs.push(`<tr>${tds.join('')}</tr>`);
	}

	return typeof tableCaption === 'string' && list.length
		? `<table>
			<caption>${tableCaption} info</caption>
			<tbody>${trs.join(``)}</tbody>
		</table>`
		: ``;
}

let allArrays = [
	// [animals, `Animals`],
	// [food, `Food`],
	// [universes, `Universes`],
	// [true, true], // проверка
	// [true, 'Smth'], // проверка
	[] // проверка
];

for (let i = 0; i < allArrays.length; i++) {
	document.write(getInfo(allArrays[i][0], allArrays[i][1]));
};


