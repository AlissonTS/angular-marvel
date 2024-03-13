import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CharacterService } from '../services/character/character.service';
import { CharacterListWithFilterComponent } from './character-list-with-filter.component';

import { IResponseData } from '../model/response-data.model';

import { mockCharactersList } from '../testing/mock-character';

describe('CharacterListWithFilterComponent', () => {
  let component: CharacterListWithFilterComponent;
  let fixture: ComponentFixture<CharacterListWithFilterComponent>;

  // stub
  let characterServiceStub: Partial<CharacterService>;

  beforeEach(async () => {
    characterServiceStub = {
      getCharacters: (): Observable<IResponseData> => {
        return of(mockCharactersList);
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CharacterListWithFilterComponent],
      providers: [
        {
          provide: CharacterService,
          useValue: characterServiceStub,
        },
      ],
      imports: [CommonModule],
      schemas: [NO_ERRORS_SCHEMA],
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
