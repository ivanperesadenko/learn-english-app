import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

import { APP_NAME } from '../../constants/application-name';
import { SidebarService } from '../../services/sidebar.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [MatIcon, MatIconButton, MatToolbar, MatToolbarRow],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	public readonly applicationName = APP_NAME;

	constructor(public sidebarService: SidebarService) {}
}
