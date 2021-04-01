import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseMeComponent } from './erase-me.component';

describe('EraseMeComponent', () => {
  let component: EraseMeComponent;
  let fixture: ComponentFixture<EraseMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraseMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EraseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
