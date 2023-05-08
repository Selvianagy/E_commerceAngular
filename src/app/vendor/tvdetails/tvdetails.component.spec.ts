import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVdetailsComponent } from './tvdetails.component';

describe('TVdetailsComponent', () => {
  let component: TVdetailsComponent;
  let fixture: ComponentFixture<TVdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
