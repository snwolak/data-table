import{ DataTable } from'./../ui/data-table.js';
import{ tempDB } from'./data-service.js';
let firstIndex = 0;
let endIndex = 5;
export class TempDatabase {
	constructor(data) {
		this.data = data;
	}
	tempArray(start, end) {
		let headers = 'Id,First name,Last name,Date,Language,Job Title'.split(',');
		let render = new DataTable(headers, this.data.slice(start, end));
		document.getElementById('output').innerHTML = render.tableTemplate();

		//Pagination prototype
		document.getElementById('previous').addEventListener('click', function() {
			firstIndex === 0 ? firstIndex : firstIndex = firstIndex - 5;
			endIndex === 5 ? endIndex : endIndex = endIndex - 5;
			console.log(firstIndex);
			new TempDatabase(tempDB).tempArray(firstIndex, endIndex);
		});
		document.getElementById('next').addEventListener('click', function() {
			firstIndex === tempDB.length - 5 ? firstIndex : firstIndex = firstIndex + 5;
			endIndex === tempDB.length ? endIndex : endIndex = endIndex + 5;
			console.log(firstIndex);
			new TempDatabase(tempDB).tempArray(firstIndex, endIndex);
		});
	}
	send() {
		//document.getElementById('output').innerHTML += `<p>${this.data.id} ${this.data.first_name}</p>`;
	}
}

