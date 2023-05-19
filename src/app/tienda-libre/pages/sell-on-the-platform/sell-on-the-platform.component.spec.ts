import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellOnThePlatformComponent } from './sell-on-the-platform.component';

describe('SellOnThePlatformComponent', () => {
  let component: SellOnThePlatformComponent;
  let fixture: ComponentFixture<SellOnThePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellOnThePlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellOnThePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
