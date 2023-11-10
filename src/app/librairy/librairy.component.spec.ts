import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrairyComponent } from './librairy.component';

describe('LibrairyComponent', () => {
  let component: LibrairyComponent;
  let fixture: ComponentFixture<LibrairyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrairyComponent]
    });
    fixture = TestBed.createComponent(LibrairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
