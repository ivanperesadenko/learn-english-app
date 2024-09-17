import { Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({
	selector: '[appThrottleClick]',
	standalone: true,
})
export class ThrottleClickDirective {
	@Input() public throttleTime = 0;
	@Output() public throttleClick = new EventEmitter<void>();
}
