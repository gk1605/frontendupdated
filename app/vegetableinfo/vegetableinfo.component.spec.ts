import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableInfo } from './vegetableinfo.component';

describe(' VegetableinfoComponent', () => {
  let component: VegetableInfo;
  let fixture: ComponentFixture< VegetableInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  VegetableInfo ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( VegetableInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
