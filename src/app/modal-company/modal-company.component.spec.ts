import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSantanderComponent } from './modal-company.component';

describe('ModalSantanderComponent', () => {
  let component: ModalSantanderComponent;
  let fixture: ComponentFixture<ModalSantanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSantanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSantanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
