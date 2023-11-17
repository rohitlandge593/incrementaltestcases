import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetplayerbyidComponent } from './getplayerbyid.component';

describe('GetplayerbyidComponent', () => {
  let component: GetplayerbyidComponent;
  let fixture: ComponentFixture<GetplayerbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetplayerbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetplayerbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
