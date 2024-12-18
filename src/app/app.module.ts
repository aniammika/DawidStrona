import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { FooterComponent } from './footer/footer.component';

import {MatIconModule} from '@angular/material/icon';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { GameTilePopupComponent } from "./game-tile-popup/game-tile-popup.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContentContainerComponent,
    GameTilePopupComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    MatIconModule,
    FooterComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
