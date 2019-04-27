import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
// import { FlashCardModule } from './app/flash-card/flash-card.module';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(FlashCardModule)
//   .catch(err => console.error(err));
