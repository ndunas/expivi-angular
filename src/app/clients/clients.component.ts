import { Component, OnInit } from '@angular/core';

import { Client } from '../client.interface';
import { ClientService } from '../client.service';

@Component({
	selector: 'app-clients',
	templateUrl: './clients.component.html',
	styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
	clients: Client[];
	hasTerms: boolean;
	searchTerms: string;

	constructor(private clientService: ClientService) { }

	ngOnInit() {
		this.onGetClients();
	}

	onGetClients() {
		this.clientService.getClients()
			.subscribe(
				(clients: Client[]) => this.clients = clients,
				(error: Response) => console.log(error)
			);
	}

	onDeleted(client: Client) {
		const position = this.clients.findIndex(
			(clientEl: Client) => {
				return clientEl.id == client.id;
			}
		);

		this.clients.splice(position, 1);
	}

	onSearch(terms) {
		this.clientService.filterClients(terms)
			.subscribe(
				(clients: Client[]) => this.clients = clients,
				(error: Response) => console.log(error)
			);

		if (!this.searchTerms.length) return this.hasTerms = false;

		return this.hasTerms = true;
	}

	onClear() {
		this.searchTerms= '';

		this.hasTerms = false;

		this.onGetClients();
	}

}
