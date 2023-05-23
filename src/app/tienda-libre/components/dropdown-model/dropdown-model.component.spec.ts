import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownModelComponent } from './dropdown-model.component';

describe('DropdownModelComponent', () => {
  let component: DropdownModelComponent;
  let fixture: ComponentFixture<DropdownModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
