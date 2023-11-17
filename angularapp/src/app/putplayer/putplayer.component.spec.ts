import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutplayerComponent } from './putplayer.component';

describe('PutplayerComponent', () => {
  let component: PutplayerComponent;
  let fixture: ComponentFixture<PutplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
