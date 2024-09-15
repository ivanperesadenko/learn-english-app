import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SidebarService {
	public sidebarOpened$$ = new BehaviorSubject<boolean>(false);

	public toggle(): void {
		this.sidebarOpened$$.next(!this.sidebarOpened$$.value);
	}
}
