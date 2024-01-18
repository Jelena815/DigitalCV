import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMeniComponent } from './o-meni.component';

describe('OMeniComponent', () => {
  let component: OMeniComponent;
  let fixture: ComponentFixture<OMeniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OMeniComponent]
    });
    fixture = TestBed.createComponent(OMeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
