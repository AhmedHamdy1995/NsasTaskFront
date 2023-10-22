import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrompetComponent } from './prompet.component';

describe('PrompetComponent', () => {
  let component: PrompetComponent;
  let fixture: ComponentFixture<PrompetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrompetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrompetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
