import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTransfComponent } from './content-transf.component';

describe('ContentTransfComponent', () => {
  let component: ContentTransfComponent;
  let fixture: ComponentFixture<ContentTransfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTransfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
