import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCustomAddComponent } from './counter-custom-add.component';

describe('CounterCustomAddComponent', () => {
  let component: CounterCustomAddComponent;
  let fixture: ComponentFixture<CounterCustomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterCustomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCustomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
