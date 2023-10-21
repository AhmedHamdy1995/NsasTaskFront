import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NsasTaskItemComponent } from './nsas-task-item.component';

describe('NsasTaskItemComponent', () => {
  let component: NsasTaskItemComponent;
  let fixture: ComponentFixture<NsasTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NsasTaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NsasTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
