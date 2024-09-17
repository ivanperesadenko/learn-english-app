import { TestBed } from '@angular/core/testing';

import { TopicsMockService } from './topics-mock.service';

describe('TopicsMockService', () => {
	let service: TopicsMockService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TopicsMockService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
