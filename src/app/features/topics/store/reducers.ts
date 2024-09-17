import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import { TopicInterface } from '../types/topic.interface';
import { TopicsStateInterface } from '../types/topics-state.interface';
import { getTopics, getTopicsSuccess } from './actions';

export const topicsAdapter: EntityAdapter<TopicInterface> = createEntityAdapter<TopicInterface>();
export const initialTopicsState: TopicsStateInterface = topicsAdapter.getInitialState({
	loading: true,
});

export const topicsFeature = createFeature({
	name: 'topicsList',
	reducer: createReducer(
		initialTopicsState,
		on(getTopics, (state: TopicsStateInterface) => ({
			...state,
			loading: true,
		})),
		on(getTopicsSuccess, (state: TopicsStateInterface, action) => {
			return topicsAdapter.addMany(action.topics, { ...state, loading: false });
		})
	),
});
