import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ClientService } from '../client.service';

import { slideInOutAnimation } from '../_animations/index';

@Component({
	moduleId: module.id.toString(),
	selector: 'app-new-client',
	templateUrl: './new-client.component.html',
	styleUrls: ['./new-client.component.css'],
	animations: [ slideInOutAnimation ],
	host: { '[@slideInOutAnimation]': '' }
})
export class NewClientComponent implements OnInit {

	constructor(private clientService: ClientService, private router: Router) { }

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		this.clientService
			.addClient(form.value.firstname, form.value.lastname, form.value.address)
			.subscribe(
				() => this.router.navigate(['/'])
			);


		form.reset();
	}

}
