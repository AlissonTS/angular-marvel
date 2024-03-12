import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListWithFilterComponent } from './character-list-with-filter.component';

describe('CharacterListWithFilterComponent', () => {
  let component: CharacterListWithFilterComponent;
  let fixture: ComponentFixture<CharacterListWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListWithFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
