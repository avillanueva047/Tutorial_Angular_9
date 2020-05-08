import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Writter } from '../writter';
import { WritterDetailComponent } from './writter-detail.component';

describe('WritterDetailComponent', () => {
  let component: WritterDetailComponent;
  let fixture: ComponentFixture<WritterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
