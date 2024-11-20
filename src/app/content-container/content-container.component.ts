import { Component } from '@angular/core';
import { IGame } from './content.models';
import gameData from 'src/assets/data/games.json';
import creditsList from 'src/assets/data/credits.json';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent {
  games: any = gameData;
  credits: any = creditsList;
  youtubeVideoId: string = 'b1YOAJcTZn0';
  openPopUp: boolean = false;
  currentGame: any = undefined;

  getImageUrl(game: IGame) {
    return '../assets/images/' + game.imageName + '.jpg';
  }

  openPopUpOnClick(game: IGame) {
    this.openPopUp = true;
    this.currentGame = game;
   }
   closePopUp() {
    this.openPopUp = false;
   }
}
