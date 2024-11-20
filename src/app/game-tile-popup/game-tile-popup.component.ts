import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGame } from '../content-container/content.models';

@Component({
  selector: 'app-game-tile-popup',
  templateUrl: './game-tile-popup.component.html',
  styleUrls: ['./game-tile-popup.component.scss']
})
export class GameTilePopupComponent {
  @Input() game!: IGame;
  @Output() close = new EventEmitter();

  closeButtonClicked() {
    this.close.emit();
  }

}
