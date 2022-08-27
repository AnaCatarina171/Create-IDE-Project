import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDEsComponent } from './ides-component.component';

describe('IDEsComponentComponent', () => {
  let component: IDEsComponent;
  let fixture: ComponentFixture<IDEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDEsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
