import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);