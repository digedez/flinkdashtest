import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuflinkComponent } from './menuflink.component';

describe('MenuflinkComponent', () => {
  let component: MenuflinkComponent;
  let fixture: ComponentFixture<MenuflinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuflinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuflinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
