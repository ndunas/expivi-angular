import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ClientService } from './client.service';

import { routing } from './app.routing';

@NgModule({
	declarations: [
		AppComponent,
		ClientComponent,
		ClientsComponent,
		NewClientComponent,
		EditClientComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [ClientService],
	bootstrap: [AppComponent]
})
export class AppModule { }
