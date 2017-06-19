import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {
	constructor(private http: Http) {
		this.getClients();
	}

	addClient(firstname: string, lastname: string, address: string) {
		const body = JSON.stringify({
			firstname: firstname,
			lastname: lastname,
			address: address
		});

		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://expivi-api.ecwix.net/api/client/', body, {headers: headers});
	}

	getClients(): Observable<any> {
		return this.http.get('http://expivi-api.ecwix.net/api/client')
						.map(
							(response: Response) => {
								return response.json().clients;
							}
						);
	}

	updateClient(id: number, firstname: string, lastname: string, address: string): Observable<any> {
		const body = JSON.stringify({
			id: id,
			firstname: firstname,
			lastname: lastname,
			address: address
		});

		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.put('http://expivi-api.ecwix.net/api/client/' + id, body, {headers: headers})
						.map(
							(response: Response) => {
								return response.json().clients;
							}
						);
	}

	filterClients(terms): Observable<any> {
		const body = JSON.stringify({
			terms: terms
		});

		const headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://expivi-api.ecwix.net/api/filter', body, {headers: headers})
						.map(
							(response: Response) => {
								return response.json().clients;
							}
						);
	}

	deleteClient(id: number) {
		return this.http.delete('http://expivi-api.ecwix.net/api/client/' + id);
	}

	findClientById(id: number): Observable<any> {
		return this.http.get('http://expivi-api.ecwix.net/api/find/' + id)
						.map(
							(response: Response) => {
								return response.json().client;
							}
						);
	}
}