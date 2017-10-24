import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarflinkComponent } from './sidebarflink.component';

describe('SidebarflinkComponent', () => {
  let component: SidebarflinkComponent;
  let fixture: ComponentFixture<SidebarflinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarflinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarflinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
