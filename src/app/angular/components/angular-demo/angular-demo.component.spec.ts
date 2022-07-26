import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemoComponent } from './angular-demo.component';

describe('AngularDemoComponent', () => {
  let component: AngularDemoComponent;
  let fixture: ComponentFixture<AngularDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
