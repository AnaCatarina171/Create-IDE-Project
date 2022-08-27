import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEDetailsComponent } from './idedetails-component.component';

describe('IDEDetailsComponentComponent', () => {
  let component: IDEDetailsComponent;
  let fixture: ComponentFixture<IDEDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDEDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDEDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
