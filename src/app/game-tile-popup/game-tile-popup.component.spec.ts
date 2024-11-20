import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTilePopupComponent } from './game-tile-popup.component';

describe('GameTilePopupComponent', () => {
  let component: GameTilePopupComponent;
  let fixture: ComponentFixture<GameTilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTilePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
