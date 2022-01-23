const days = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday"];
let [Monday, Tuesday, Wednesday, Thursday, Friday] = days;

const ROOMS = {
	Red: {
		hours: {
			start: 10,
			end: 19
		},
		days: [Monday, Tuesday, Wednesday, Friday]
	},
	Green: {
		hours: {
			start: 11,
			end: 17
		},
		days: [Tuesday, Thursday, Friday]
	}
}

const Participants = ['Igor', 'Nina', 'Vladimir', 'Anna'];

const meetForm = document.querySelector(`#meetForm`);
const meetRoom = document.querySelector(`select[data-id="meetRoom"]`);
const meetHours = document.querySelector(`select[data-id="meetHours"]`);
const meetDays = document.querySelector(`select[data-id="meetDays"]`);

const getRoomHours = roomName => {
	let hour = [],
		start = ROOMS[roomName].hours.start,
		end = ROOMS[roomName].hours.end;

	for(; start<=end; start++){
		hour.push(start);
	}

	return hour;
}

const getRoomDays = roomName => ROOMS[roomName].days;

const generateOptions = (el, func, room, itemView="") => {
	 el.innerHTML = func(room).map(item => `<option value="${item}">${item}${itemView}</option>`);
}

for(let key in ROOMS){
	meetRoom.innerHTML += `<option value="${key}">${key}</option>`;
}

generateOptions(meetHours, getRoomHours, meetRoom.value, ":00");
generateOptions(meetDays, getRoomDays, meetRoom.value);

meetRoom.addEventListener(`change`, ()=>{
	generateOptions(meetHours, getRoomHours, meetRoom.value, ":00");
	generateOptions(meetDays, getRoomDays, meetRoom.value);
})


meetForm.addEventListener(`submit`, e=>{
	e.preventDefault();

	let meetName = e.target.querySelector(`input[data-id="meetName"]`).value,
		meetParticipants = [...e.target.querySelector(`select[data-id="meetParticipants"]`).selectedOptions],
		room = meetRoom.value,
		hour = meetHours.value,
		day = meetDays.value;

	meetParticipants = meetParticipants.map(option => option.value);

	let meet = {
		name: meetName,
		room: room,
		participants: meetParticipants,
		hour: hour,
		day: day
	}

	let userNotExist = true;

	let storageParticipants = localStorage.getItem(`participants`) ? JSON.parse(localStorage.getItem(`participants`)) : {};

	meetParticipants.forEach(user => {
		if(storageParticipants[user]){
			let userCalendar = storageParticipants[user];

			let userInMeet = userCalendar.find(meet => meet.day === day && meet.hour == hour);

			if(userInMeet){
				alert(`${user} already in meet at ${userInMeet.room} ${hour}:00 ${day}.`);
				userNotExist = false;
			} else{
				storageParticipants[user].push({hour: hour, day: day, room: room});
			}

		} else{
			storageParticipants[user] = [{hour: hour, day: day, room: room}]
		}
	})

	if(userNotExist){
		localStorage.setItem(`participants`, JSON.stringify(storageParticipants));

		let storageRooms = localStorage.getItem(`rooms`) ? JSON.parse(localStorage.getItem(`rooms`)) : {};
		let storageRoom;

		let meetExist = false;
		
		if(storageRooms[room]){
			if(storageRooms[room].find(storageMeet => storageMeet.hour === hour && storageMeet.day === day)){
				alert(`Meet at ${hour}:00 in ${day} already exist!`);
				meetExist = true;
			} else{
				storageRoom = storageRooms[room];
				storageRoom.push(meet);
			}
		} else{
			storageRooms[room] = [meet];
			renderTable(room);
		}

		!meetExist && document.querySelector(`#Table${room} td[data-day="${day}"][data-hour="${hour}"]`).append(renderMeet(meet));

		localStorage.setItem(`rooms`, JSON.stringify(storageRooms));
	}
})

// MEET

const renderMeet = meet => {

	let meetBlock = document.createElement(`div`);
	meetBlock.innerHTML = `<p>Name: ${meet.name}</p>
		<p>Participants: ${meet.participants.join(`, `)}</p>`;

	let meetBtnDel = document.createElement(`button`);
	meetBtnDel.innerHTML = `Delete`;
	meetBtnDel.addEventListener(`click`, () => {

		let roomsInStorage = JSON.parse(localStorage.getItem(`rooms`));

		let meetRoom = roomsInStorage[meet.room];

		let meetIndex = meetRoom.findIndex(storageMeet => storageMeet.day === meet.day && storageMeet.hour == meet.hour);
		meetRoom.splice(meetIndex, 1);

		// DELETE TABLE IF NO MEETS
		if(meetRoom.length === 0){
			delete roomsInStorage[meet.room];
			document.querySelector(`#Table${meet.room}`).remove();
		}

		localStorage.setItem(`rooms`, JSON.stringify(roomsInStorage));

		// DELETE MEET FOR USER
		let storageParticipants = JSON.parse(localStorage.getItem(`participants`));
		meet.participants.forEach(user => {
			let userMeetIndex = storageParticipants[user].findIndex(storageMeet => storageMeet.day === meet.day && storageMeet.hour == meet.hour);
			storageParticipants[user].splice(userMeetIndex, 1);

			if(!storageParticipants[user].length){
				delete storageParticipants[user];
			}
		})
		localStorage.setItem(`participants`, JSON.stringify(storageParticipants));

		meetBlock.remove();
	});

	meetBlock.append(meetBtnDel);

	return meetBlock;
}

// TABLES
const meetTables = document.querySelector(`#meetTables`);

const renderTable = (room, meets=[]) => {

	let table = document.createElement(`table`);
		table.id = `Table${room}`;
		table.innerHTML = `<caption>${room} meeting room</caption>
		<thead>
			<tr>
				<th>hour</th>
				${getRoomDays(room).map(day => `<th>${day}</th>`).join(``)}
			</tr>
		</thead>`;

		getRoomHours(room).forEach(hour => {

			let tr = document.createElement(`tr`);
				tr.innerHTML = `<td>${hour}:00</td>`;

				getRoomDays(room)
					.forEach(day => {
						let meetExist = meets.find(meet => meet.hour == hour && meet.day === day);
						let meet = meetExist ? renderMeet(meetExist) : ``;

						let td = document.createElement(`td`);
						td.dataset.day = day;
						td.dataset.hour = hour;

						td.append(meet);
						tr.append(td);
					})

				table.append(tr);
		})

		meetTables.append(table);
}

const renderTablesFromStorage = () => {
	let storage = localStorage.getItem(`rooms`) ? JSON.parse(localStorage.getItem(`rooms`)) : {};

	for(let room in storage){

		// if(storage[room].length>0){
		// 	renderTable(room, storage[room]);
		// }

		storage[room].length && renderTable(room, storage[room]);
	}
	
};

renderTablesFromStorage();
