import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPanelComponent } from './sort-panel.component';

describe('SortPanelComponent', () => {
  let component: SortPanelComponent;
  let fixture: ComponentFixture<SortPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
