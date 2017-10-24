import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMetasComponent } from './content-metas.component';

describe('ContentMetasComponent', () => {
  let component: ContentMetasComponent;
  let fixture: ComponentFixture<ContentMetasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMetasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
