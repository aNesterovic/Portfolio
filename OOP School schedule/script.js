const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

class Gradation {
	gradationRenderStudent() {
		let i = 0;
		if (this.mark <= 20 && this.mark >= i) {
			return gradation[20];
		} else if (this.mark <= 55 && this.mark > 20) {
			return gradation[55];
		} else if (this.mark <= 85 && this.mark > 55) {
			return gradation[85];
		} else if (this.mark <= 100 && this.mark > 85) {
			return gradation[100];
		}
	}

	gradationRenderLector() {
		let i = 0;
		if ((this.score <= 20 || this.studentsScore <= 20) && (this.score >= i || this.studentsScore >= i)) {
			return gradation[20];
		} else if ((this.score <= 55 || this.studentsScore <= 55) && (this.score || this.studentsScore > 20)) {
			return gradation[55];
		} else if ((this.score <= 85 || this.studentsScore <= 85) && (this.score > 55 || this.studentsScore > 55)) {
			return gradation[85];
		} else if ((this.score <= 100 || this.studentsScore <= 100) && (this.score > 85 || this.studentsScore > 85)) {
			return gradation[100];
		}
	}

	gradationRenderAdmin() {
		let i = 0;
		if ((this.score) <= 20 && (this.score) >= i) {
			return gradation[20];
		} else if ((this.score) <= 55 && (this.score) > 20) {
			return gradation[55];
		} else if ((this.score) <= 85 && (this.score) > 55) {
			return gradation[85];
		} else if ((this.score) <= 100 && (this.score) > 85) {
			return gradation[100];
		}
	}
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Oksana Smith",
		age: 20,
		img: "AmalSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			}
		]
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(user) {
		// this.name = user.name;
		// this.age = user.age;
		// this.img = user.img
		// this.role = user.role;
		for (let key in user) {
			this[key] = user[key]
		}
		if (user.courses) {
			this.courses = this.coursesCopy(user.courses);
		}
	}

	coursesCopy(arr) {
		let copyArr = arr
			.map(obj => {
				let newObj = new Gradation();
				for (let key in obj) {
					newObj[key] = obj[key]
				}
				newObj.mark = newObj.gradationRenderStudent()
				return newObj;
			})
		return copyArr;
	}

	renderCourses() {
		let newArr = this.courses
			.map(obj => {
				return `<p class="user__courses--course student">${obj.title}<span class="${obj.mark}">${obj.mark}</span></p>`
			})
			.join('')
		return newArr
	}

	basicDocument() {
		return `<div class="user">
			<div class="user__info">${this.render()}</div>
			<div class="user__courses">${this.courses ? this.renderCourses() : ''}</div>
		</div>`
	}

	render() {
		return `<div class="user__info--data">
			<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
			<div class ="user__naming">
				<p>Name: <b>${this.name}</b></p>
				<p>Age: <b>${this.age}</b></p>
			</div>
		</div>
		<div class="user__info--role student">
			<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
			<p>${this.role}</p>
		</div>
		`
	}

};

class Student extends User {
	constructor(user) {
		super(user);
	}
};

class Lector extends User {
	constructor(user) {
		super(user);
	}

	coursesCopy(arr) {
		let copyArr = arr
			.map(obj => {
				let newObj = new Gradation();
				for (let key in obj) {
					newObj[key] = obj[key]
				}
				newObj.score = newObj.gradationRenderLector()
				newObj.studentsScore = newObj.gradationRenderLector()
				return newObj;
			})
		return copyArr;
	}

	renderCourses() {
		let newArr = this.courses
			.map(obj => {
				return `<div class="user__courses admin--info">
				<div class="user__courses--course lector">
					<p>Title: <b>${obj.title}</b></p>
					<p>Lector's score: <span class="${obj.score}">${obj.score}</span></p>
					<p>Average student's score: <span class="${obj.studentsScore}">${obj.studentsScore}</span></p>
				</div>
				</div>`
			})
			.join('')
		return newArr
	}
};

class Admin extends User {
	constructor(user) {
		super(user);
	}
	coursesCopy(arr) {
		let copyArr = arr
			.map(obj => {
				let newObj = new Gradation();
				for (let key in obj) {
					newObj[key] = obj[key]
				}
				newObj.score = newObj.gradationRenderAdmin()
				return newObj;
			})
		return copyArr;
	}

	renderCourses() {
		let newArr = this.courses
			.map(obj => {
				return `<div class="user__courses admin--info">
				<div class="user__courses--course admin">
					<p>Title: <b>${obj.title}</b></p>
					<p>Admin's score: <span class="${obj.score}">${obj.score}</span></p>
					<p>Lector: <b>${obj.lector}</b></p>
				</div>
				</div>`
			})
			.join('')
		return newArr;
	}
};


const userRole = {
	student: obj => new Student(obj),
	admin: obj => new Admin(obj),
	lector: obj => new Lector(obj)
};

let toDocument = users
	.map(user => {
		return userRole[user.role] && userRole[user.role](user);
	})
	.map(user => user.basicDocument())
	.join('');

document.write(`<div class="users">${toDocument}</div>`);