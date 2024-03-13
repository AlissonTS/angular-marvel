import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CharacterFilterComponent } from './character-filter.component';

describe('CharacterFilterComponent', () => {
  let component: CharacterFilterComponent;
  let fixture: ComponentFixture<CharacterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterFilterComponent],
      imports: [CommonModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value when filter is changed', fakeAsync(() => {
    // spy on
    const spyEmitter = spyOn(component.characterName, 'emit');

    // change input
    component.filterInput.setValue('Hulk');

    // trigger change detection
    tick(750);
    fixture.detectChanges();

    // expect
    expect(spyEmitter).toHaveBeenCalledWith('Hulk');
  }));
});
