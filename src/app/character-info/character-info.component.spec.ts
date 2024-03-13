import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';

import { CharacterService } from '../services/character/character.service';
import { CharacterInfoComponent } from './character-info.component';
import { CharacterListWithFilterComponent } from '../character-list-with-filter/character-list-with-filter.component';

import { ICharacter } from '../model/character.model';

import { mockCharacter } from '../testing/mock-character';

describe('CharacterInfoComponent', () => {
  let component: CharacterInfoComponent;
  let fixture: ComponentFixture<CharacterInfoComponent>;

  let characterService: CharacterService;
  let router: Router;

  // stub
  let characterServiceStub: Partial<CharacterService>;

  beforeEach(async () => {
    characterServiceStub = {
      getCharacterById: (): Observable<ICharacter> => {
        return of(mockCharacter);
      },
    };

    await TestBed.configureTestingModule({
      declarations: [CharacterInfoComponent],
      providers: [
        {
          provide: CharacterService,
          useValue: characterServiceStub,
        },
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ id: 1 })) },
        },
      ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          {
            path: 'characters-list',
            component: CharacterListWithFilterComponent,
          },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoComponent);
    component = fixture.componentInstance;

    characterService = TestBed.inject(CharacterService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get character info', () => {
    // spy on
    const spyService = spyOn(
      characterService,
      'getCharacterById'
    ).and.callThrough();

    // call method
    component.getCharacterInfo(1);

    // expect
    expect(spyService).toHaveBeenCalledWith(1);
  });

  it('should navigate back to characters list', () => {
    // spyOn
    const spyRouter = spyOn(router, 'navigate').and.callThrough();

    // call method
    component.returnToList();

    // expect
    expect(spyRouter).toHaveBeenCalled();
  });
});
