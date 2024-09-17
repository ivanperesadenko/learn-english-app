import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TopicInterface } from '../../types/topic.interface';
import {
	MatCard,
	MatCardActions,
	MatCardContent,
	MatCardHeader,
	MatCardTitle,
} from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
	selector: 'app-topic-card',
	standalone: true,
	imports: [
		MatCard,
		MatCardContent,
		MatCardActions,
		MatCardHeader,
		MatCardTitle,
		MatTooltip,
		MatButton,
		ButtonComponent,
	],
	templateUrl: './topic-card.component.html',
	styleUrl: './topic-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCardComponent {
	@Input() public topic!: TopicInterface;
}
