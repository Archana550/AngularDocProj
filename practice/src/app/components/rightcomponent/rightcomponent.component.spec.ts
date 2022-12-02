import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcomponentComponent } from './rightcomponent.component';

describe('RightcomponentComponent', () => {
  let component: RightcomponentComponent;
  let fixture: ComponentFixture<RightcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
