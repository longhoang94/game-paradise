import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GameSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GameSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GameSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameSharedModule {
  static forRoot() {
    return {
      ngModule: GameSharedModule
    };
  }
}
