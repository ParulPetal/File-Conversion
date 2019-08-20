import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToimageComponent } from './toimage.component';

describe('ToimageComponent', () => {
  let component: ToimageComponent;
  let fixture: ComponentFixture<ToimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
