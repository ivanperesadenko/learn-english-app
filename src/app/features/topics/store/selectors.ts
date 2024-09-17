import { createSelector } from '@ngrx/store';
import { AppState } from '../../../core/store/state.interface';
import { topicsAdapter } from './reducers';
import { TopicsStateInterface } from '../types/topics-state.interface';

const selectFeature = (state: AppState) => state.topicsList;

export const selectTopics = createSelector(selectFeature, topicsAdapter.getSelectors().selectAll);
export const selectLoading = createSelector(
	selectFeature,
	(state: TopicsStateInterface) => state.loading
);
