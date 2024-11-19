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
  youtubeVideoId = 'b1YOAJcTZn0';

  ngOnInit() {
    console.log(this.games);
  }

  getImageUrl(game: IGame) {
    console.log(game);
    return '../assets/images/' + game.imageName + '.jpg';
  }
}
