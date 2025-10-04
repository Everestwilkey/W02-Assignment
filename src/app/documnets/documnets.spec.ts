import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Documnets } from './documnets';

describe('Documnets', () => {
  let component: Documnets;
  let fixture: ComponentFixture<Documnets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Documnets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Documnets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
