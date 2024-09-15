import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'topics',
	},
	{
		path: 'topics',
		data: {
			tabTitle: 'Topics',
		},
		loadComponent: () =>
			import('./features/topics/topics.component').then((m) => m.TopicsComponent),
	},
	{
		path: 'page-not-found',
		data: {
			tabTitle: 'Page not found',
		},
		loadComponent: () =>
			import('./features/page-not-found/page-not-found.component').then(
				(m) => m.PageNotFoundComponent
			),
	},
	{
		path: '**',
		redirectTo: 'page-not-found',
	},
];
