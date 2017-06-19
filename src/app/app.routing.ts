import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

const APP_ROUTES: Routes = [
	{ path: '', component: ClientsComponent },
	{ path: 'new-client', component: NewClientComponent },
	{ path: 'edit-client/:id', component: EditClientComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);