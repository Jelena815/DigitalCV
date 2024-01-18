import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StecenoZnanjeComponent } from './steceno-znanje.component';

describe('StecenoZnanjeComponent', () => {
  let component: StecenoZnanjeComponent;
  let fixture: ComponentFixture<StecenoZnanjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StecenoZnanjeComponent]
    });
    fixture = TestBed.createComponent(StecenoZnanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
