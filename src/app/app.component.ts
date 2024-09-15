import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';

import { SidebarService } from './core/services/sidebar.service';
import { filter, merge, Observable, skip, Subscription, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { Title } from '@angular/platform-browser';
import { RouteData } from './core/types/route-data.interface';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		MatToolbar,
		MatIcon,
		MatIconButton,
		MatDrawerContainer,
		MatDrawer,
		MatDrawerContent,
		AsyncPipe,
		SidebarComponent,
		HeaderComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
	public readonly sidebarOpened$!: Observable<boolean>;

	private routerSubscription!: Subscription;

	constructor(
		public sidenavService: SidebarService,
		private tabTitleService: Title,
		private router: Router
	) {
		this.sidebarOpened$ = this.sidenavService.sidebarOpened$$;
	}

	public ngOnInit(): void {
		// TODO: Need to move that logic outside of root component
		this.listenRouterEvents();
	}

	private listenRouterEvents(): void {
		const routerEvents$ = this.router.events;
		const activationEnd$ = routerEvents$.pipe(
			filter((events) => events instanceof ActivationEnd),
			tap((event: ActivationEnd) => {
				const routeData = event.snapshot.data as RouteData;
				this.setTitle(routeData.tabTitle);
			})
		);
		const navigationEnd$ = routerEvents$.pipe(
			filter((events) => events instanceof NavigationEnd),
			skip(1),
			tap(() => {
				this.sidenavService.toggle();
			})
		);

		this.routerSubscription = merge(activationEnd$, navigationEnd$).subscribe();
	}

	private setTitle(title: string | undefined): void {
		if (title) this.tabTitleService.setTitle(title);
	}

	public ngOnDestroy(): void {
		this.routerSubscription.unsubscribe();
	}
}
