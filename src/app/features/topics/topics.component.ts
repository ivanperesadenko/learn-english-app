import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';

import { AppState } from '../../core/store/state.interface';
import { TopicInterface } from './types/topic.interface';
import { selectLoading, selectTopics } from './store/selectors';
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { getTopics } from './store/actions';

@Component({
	selector: 'app-topics',
	standalone: true,
	imports: [RouterOutlet, AsyncPipe, TopicsListComponent],
	templateUrl: './topics.component.html',
	styleUrl: './topics.component.scss',
})
export class TopicsComponent implements OnInit {
	public topicsList$!: Observable<TopicInterface[]>;
	public topicsCount$!: Observable<number>;
	public isEmptyTopicsList$!: Observable<boolean>;
	public loading$!: Observable<boolean>;

	constructor(private store: Store<AppState>) {
		this.topicsList$ = this.store.pipe(select(selectTopics));
		this.topicsCount$ = this.topicsList$.pipe(map((topics) => topics.length));
		this.isEmptyTopicsList$ = this.topicsCount$.pipe(map((count) => count === 0));
		this.loading$ = this.store.pipe(select(selectLoading));
	}

	public ngOnInit(): void {
		this.store.dispatch(getTopics());
	}
}
