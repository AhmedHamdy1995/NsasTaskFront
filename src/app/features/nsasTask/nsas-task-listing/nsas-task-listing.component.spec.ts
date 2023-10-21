import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsasTaskListingComponent } from './nsas-task-listing.component';

describe('NsasTaskListingComponent', () => {
  let component: NsasTaskListingComponent;
  let fixture: ComponentFixture<NsasTaskListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsasTaskListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsasTaskListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
