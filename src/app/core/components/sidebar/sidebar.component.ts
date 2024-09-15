import { Component } from '@angular/core';

import { SidebarLink } from './interfaces/sidebar-link.interface';
import { SIDEBAR_LINKS } from './constants/sidebar-links';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [SidebarLinkComponent],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	public readonly links: SidebarLink[] = SIDEBAR_LINKS;
}
