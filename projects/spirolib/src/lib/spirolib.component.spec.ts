import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpirolibComponent } from './spirolib.component';

describe('SpirolibComponent', () => {
  let component: SpirolibComponent;
  let fixture: ComponentFixture<SpirolibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpirolibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpirolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
