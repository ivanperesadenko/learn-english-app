import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStore as provideNgXsStore } from '@ngxs/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsFormPlugin } from '@ngxs/form-plugin';
// import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';
// import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
// import { withNgxsWebSocketPlugin } from '@ngxs/websocket-plugin';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideAnimationsAsync(),
		provideStore(),
		provideEffects(),
		provideRouterStore(),
		provideStoreDevtools({ maxAge: 50, logOnly: !isDevMode() }),
		provideNgXsStore(
			[],
			withNgxsReduxDevtoolsPlugin(),
			withNgxsFormPlugin(),
			// withNgxsLoggerPlugin(),
			withNgxsRouterPlugin()
			// withNgxsStoragePlugin({  }),
			// withNgxsWebSocketPlugin()
		),
	],
};
