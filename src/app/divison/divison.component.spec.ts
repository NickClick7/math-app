import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisonComponent } from './divison.component';

describe('DivisonComponent', () => {
  let component: DivisonComponent;
  let fixture: ComponentFixture<DivisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
