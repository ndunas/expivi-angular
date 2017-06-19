import { Component, HostBinding, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Client } from '../client.interface';
import { ClientService } from '../client.service';

import { slideInOutAnimation } from '../_animations/index';

@Component({
	moduleId: module.id.toString(),
	selector: 'app-edit-client',
	templateUrl: './edit-client.component.html',
	styleUrls: ['./edit-client.component.css'],
	animations: [slideInOutAnimation]
})
export class EditClientComponent implements OnInit {
	private sub:any;
	client: Client;
	id: number;

	constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {

			this.id = params['id'];

			this.clientService
				.findClientById(this.id)
				.subscribe(client => this.client = client);
		});
	}

	onSubmit(form: NgForm) {
		this.clientService
			.updateClient(this.id, form.value.firstname, form.value.lastname, form.value.address)
			.subscribe(
				() => this.router.navigate(['/'])
			);
	}

	onCancel() {
		var result = confirm('All changes will be lost. Are you sure you want to cancel?');
		
		if (result) this.router.navigate(['/']);
	}

}
