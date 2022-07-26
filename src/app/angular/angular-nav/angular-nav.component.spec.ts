import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNavComponent } from './angular-nav.component';

describe('AngularNavComponent', () => {
  let component: AngularNavComponent;
  let fixture: ComponentFixture<AngularNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
