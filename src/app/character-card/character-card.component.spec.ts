import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from './character-card.component';
import { CharacterInfoComponent } from '../character-info/character-info.component';

import { mockCharacter } from '../testing/mock-character';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardComponent],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
          { path: 'character-info/:id', component: CharacterInfoComponent },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to character detail', () => {
    // arrange
    component.character = {
      ...mockCharacter,
    };

    // spyOn
    const spyRouter = spyOn(router, 'navigate').and.callThrough();

    // call method
    component.navigate();

    // expect
    expect(spyRouter).toHaveBeenCalled();
  });
});
