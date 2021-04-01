import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWriteComponent } from './dialog-write.component';

describe('DialogWriteComponent', () => {
  let component: DialogWriteComponent;
  let fixture: ComponentFixture<DialogWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
