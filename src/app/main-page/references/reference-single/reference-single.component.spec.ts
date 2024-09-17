import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceSingleComponent } from './reference-single.component';

describe('ReferenceSingleComponent', () => {
  let component: ReferenceSingleComponent;
  let fixture: ComponentFixture<ReferenceSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
