import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountDetailsComponent } from './acount-details.component';

describe('AcountDetailsComponent', () => {
  let component: AcountDetailsComponent;
  let fixture: ComponentFixture<AcountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcountDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
