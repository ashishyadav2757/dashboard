import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAppComponent } from './to-app.component';

describe('ToAppComponent', () => {
  let component: ToAppComponent;
  let fixture: ComponentFixture<ToAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
