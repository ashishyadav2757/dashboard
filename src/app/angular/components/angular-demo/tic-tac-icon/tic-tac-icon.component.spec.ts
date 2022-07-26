import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacIconComponent } from './tic-tac-icon.component';

describe('TicTacIconComponent', () => {
  let component: TicTacIconComponent;
  let fixture: ComponentFixture<TicTacIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTacIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
