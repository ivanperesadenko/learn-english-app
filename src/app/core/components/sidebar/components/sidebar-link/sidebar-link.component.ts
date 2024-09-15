import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarLink } from '../../interfaces/sidebar-link.interface';

@Component({
	selector: 'app-sidebar-link',
	standalone: true,
	imports: [MatIcon, MatRipple, RouterLink, RouterLinkActive],
	templateUrl: './sidebar-link.component.html',
	styleUrl: './sidebar-link.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLinkComponent {
	@Input() public link!: SidebarLink;
	@Input() public isLastLink = false;
}
