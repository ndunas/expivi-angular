import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Client } from '../client.interface';
import { ClientService } from '../client.service';

@Component({
	selector: '[app-tr]',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
	@Input() client: Client;
	@Output() clientDeleted = new EventEmitter<Client>();
	firstnameReadOnly = true;
	lastnameReadOnly = true;
	addressReadOnly = true;

	constructor(private clientService: ClientService) { }

	ngOnInit() {
	}

	onDelete() {
		var result = confirm('All changes will be lost. Are you sure you want to cancel?');
		
		if (!result) return;;

		this.clientService.deleteClient(this.client.id)
			.subscribe(
				() => {
					this.clientDeleted.emit(this.client);

					console.log('erased');
				}
			);
	}

	onUpdate() {
		this.clientService.updateClient(this.client.id, this.client.firstname, this.client.lastname, this.client.address)
			.subscribe(
				(client: Client) => (
					this.client = client
				)
			);
	}

	onChange(event, field, attribute) {
		this.client[attribute] = event.target.value;

		this.clientService.updateClient(this.client.id, this.client.firstname, this.client.lastname, this.client.address)
			.subscribe(
				(client: Client) => console.log('edited')
			);

		this[field] = true;
	}

	onDblClick(bool, field) {
		if (bool) return this[field] = false;

		this[field] = true;
	}
}
