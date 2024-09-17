import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getTopics, getTopicsSuccess } from './actions';
import { map, switchMap } from 'rxjs';
import { TopicsMockService } from '../services/topics-mock.service';
import { TopicInterface } from '../types/topic.interface';

@Injectable()
export class TopicsEffects {
	constructor(
		private actions$: Actions,
		private topicsService: TopicsMockService
	) {}

	public getTopics$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getTopics),
			switchMap(() => this.topicsService.getTopics()),
			map((topics: TopicInterface[]) => getTopicsSuccess({ topics }))
		)
	);
}
