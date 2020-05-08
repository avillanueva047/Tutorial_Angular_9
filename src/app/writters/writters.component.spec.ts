import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittersComponent } from './writters.component';

describe('WrittersComponent', () => {
  let component: WrittersComponent;
  let fixture: ComponentFixture<WrittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
