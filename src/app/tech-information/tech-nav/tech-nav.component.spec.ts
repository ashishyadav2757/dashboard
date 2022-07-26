import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechNavComponent } from './tech-nav.component';

describe('TechNavComponent', () => {
  let component: TechNavComponent;
  let fixture: ComponentFixture<TechNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
