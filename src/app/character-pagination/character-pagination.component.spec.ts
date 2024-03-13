import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { CharacterPaginationComponent } from './character-pagination.component';
import { CommonModule } from '@angular/common';

describe('CharacterPaginationComponent', () => {
  let component: CharacterPaginationComponent;
  let fixture: ComponentFixture<CharacterPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterPaginationComponent],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit next page', fakeAsync(() => {
    // arrange
    component.currentPage = 0;

    // spy on
    const spyEmitter = spyOn(component.newPage, 'emit');

    // call method
    component.nextPage();

    // trigger change detection
    fixture.detectChanges();

    // expect
    expect(component.currentPage).toBe(1);
    expect(spyEmitter).toHaveBeenCalledWith(1);
  }));

  it('should emit previous page', fakeAsync(() => {
    // arrange
    component.currentPage = 1;

    // spy on
    const spyEmitter = spyOn(component.newPage, 'emit');

    // call method
    component.previousPage();

    // trigger change detection
    fixture.detectChanges();

    // expect
    expect(component.currentPage).toBe(0);
    expect(spyEmitter).toHaveBeenCalledWith(0);
  }));

  it('should emit last page', fakeAsync(() => {
    // arrange
    component.currentPage = 0;
    component.numberPages = 1;

    // spy on
    const spyEmitter = spyOn(component.newPage, 'emit');

    // call method
    component.goToLastPage();

    // trigger change detection
    fixture.detectChanges();

    // expect
    expect(component.currentPage).toBe(1);
    expect(spyEmitter).toHaveBeenCalledWith(1);
  }));

  it('should emit first page', fakeAsync(() => {
    // arrange
    component.currentPage = 1;
    component.numberPages = 1;

    // spy on
    const spyEmitter = spyOn(component.newPage, 'emit');

    // call method
    component.goToFirstPage();

    // trigger change detection
    fixture.detectChanges();

    // expect
    expect(component.currentPage).toBe(0);
    expect(spyEmitter).toHaveBeenCalledWith(0);
  }));
});
