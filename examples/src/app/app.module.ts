import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxWithVirtualScrollModule } from 'ngx-with-virtual-scroll';
import { MinimalComponent } from './minimal/minimal.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BlocksComponent } from './blocks/blocks.component';

@NgModule({
    declarations: [
        AppComponent,
        MinimalComponent,
        BlocksComponent,
    ],
    imports: [
        BrowserModule,
        NgxWithVirtualScrollModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}