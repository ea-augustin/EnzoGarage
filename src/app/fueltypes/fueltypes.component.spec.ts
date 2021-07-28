import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueltypesComponent } from './fueltypes.component';

describe('FueltypesComponent', () => {
  let component: FueltypesComponent;
  let fixture: ComponentFixture<FueltypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FueltypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FueltypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
