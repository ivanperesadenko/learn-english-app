import { Component, Input } from '@angular/core';
import { TopicInterface } from '../../types/topic.interface';
import { TopicCardComponent } from '../topic-card/topic-card.component';

@Component({
	selector: 'app-topics-list',
	standalone: true,
	imports: [TopicCardComponent],
	templateUrl: './topics-list.component.html',
	styleUrl: './topics-list.component.scss',
})
export class TopicsListComponent {
	@Input() public topics: TopicInterface[] | null = [];
}
