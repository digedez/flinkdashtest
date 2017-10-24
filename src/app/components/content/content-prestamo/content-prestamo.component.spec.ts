import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPrestamoComponent } from './content-prestamo.component';

describe('ContentPrestamoComponent', () => {
  let component: ContentPrestamoComponent;
  let fixture: ComponentFixture<ContentPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
