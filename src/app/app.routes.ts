import { Routes } from '@angular/router';
import { TOPICS_ROUTES } from './features/topics/routes/topics-routes';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'topics',
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
	...TOPICS_ROUTES,
	{
		path: '**',
		redirectTo: 'page-not-found',
	},
];
