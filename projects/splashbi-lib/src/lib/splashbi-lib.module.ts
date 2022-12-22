import { NgModule } from '@angular/core';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { FilterPipe } from './filter.pipe';
import { ShortenPipe } from './shorten.pipe';
import { SplashbiLibComponent } from './splashbi-lib.component';
import { UnlessDirective } from './unless.directive';



@NgModule({
  declarations: [
    SplashbiLibComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    FilterPipe,
    ShortenPipe
  ],
  imports: [
  ],
  exports: [
    SplashbiLibComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    FilterPipe,
    ShortenPipe
  ]
})
export class SplashbiLibModule { }
