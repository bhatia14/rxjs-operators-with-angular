import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectOperatorComponent } from './subject-operator.component';

describe('SubjectOperatorComponent', () => {
  let component: SubjectOperatorComponent;
  let fixture: ComponentFixture<SubjectOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
