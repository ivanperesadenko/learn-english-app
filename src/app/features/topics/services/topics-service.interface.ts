import { Observable } from 'rxjs';
import { TopicInterface } from '../types/topic.interface';

export interface TopicsService {
	getTopics(): Observable<TopicInterface[]>;
}
