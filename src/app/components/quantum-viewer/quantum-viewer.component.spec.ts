import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumViewerComponent } from './quantum-viewer.component';

describe('QuantumViewerComponent', () => {
  let component: QuantumViewerComponent;
  let fixture: ComponentFixture<QuantumViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantumViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantumViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
