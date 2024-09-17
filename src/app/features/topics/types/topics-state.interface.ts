import { EntityState } from '@ngrx/entity';
import { TopicInterface } from './topic.interface';

export interface TopicsStateInterface extends EntityState<TopicInterface> {
	loading: boolean;
}
