import { Routes } from '@angular/router';
import { TopicsMockService } from '../services/topics-mock.service';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { topicsFeature } from '../store/reducers';
import { TopicsEffects } from '../store/effects';

export const TOPICS_ROUTES: Routes = [
	{
		path: 'topics',
		data: {
			tabTitle: 'Topics',
		},
		providers: [TopicsMockService, provideState(topicsFeature), provideEffects([TopicsEffects])],
		loadComponent: () => import('../topics.component').then((m) => m.TopicsComponent),
	},
];
