import { createAction, props } from '@ngrx/store';
import { TopicInterface } from '../types/topic.interface';

export const getTopics = createAction('[Topics] get topics');
export const getTopicsSuccess = createAction(
	'[Topics] get topics success',
	props<{ topics: TopicInterface[] }>()
);
export const getTopicsFailure = createAction('[Topics] get topics failure');
