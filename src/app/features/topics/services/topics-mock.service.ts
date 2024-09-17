import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

import { TopicInterface } from '../types/topic.interface';
import { topics } from '../constants/topics-mock';

@Injectable()
export class TopicsMockService {
	public getTopics(): Observable<TopicInterface[]> {
		return of(null).pipe(
			delay(3000),
			map((_) => topics)
		);
	}
}
