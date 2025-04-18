import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardWallComponent } from './board-wall.component';

describe('BoardWallComponent', () => {
  let component: BoardWallComponent;
  let fixture: ComponentFixture<BoardWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardWallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
