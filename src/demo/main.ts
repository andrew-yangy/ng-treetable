import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { hmrModule  } from '@angularclass/hmr';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ngModuleRef: any) => {
    // `module` global ref for webpackhmr
    // Don't run this in Prod
    return hmrModule(ngModuleRef, module);
  })
  .catch((err) => console.error(err));
