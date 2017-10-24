import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTarjetaComponent } from './content-tarjeta.component';

describe('ContentTarjetaComponent', () => {
  let component: ContentTarjetaComponent;
  let fixture: ComponentFixture<ContentTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
