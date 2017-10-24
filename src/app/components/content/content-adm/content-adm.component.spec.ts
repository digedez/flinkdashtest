import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAdmComponent } from './content-adm.component';

describe('ContentAdmComponent', () => {
  let component: ContentAdmComponent;
  let fixture: ComponentFixture<ContentAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
