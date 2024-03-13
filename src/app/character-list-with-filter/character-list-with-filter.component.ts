import { Component } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';

import { CharacterService } from '../services/character/character.service';

interface IFilter {
  characterName: string;
  pageNumber: number;
}

@Component({
  selector: 'app-character-list-with-filter',
  templateUrl: './character-list-with-filter.component.html',
  styleUrls: ['./character-list-with-filter.component.scss'],
})
export class CharacterListWithFilterComponent {
  private filter$ = new BehaviorSubject<IFilter>({
    characterName: '',
    pageNumber: 0,
  });

  characters$ = this.filter$.pipe(
    switchMap(data => {
      return this.characterService.getCharacters(
        data.characterName,
        data.pageNumber * 20
      );
    })
  );

  constructor(private characterService: CharacterService) {}

  onFilterChanged(name: string) {
    this.filter$.next({
      characterName: name,
      pageNumber: 0,
    });
  }

  onPageChanged(page: number) {
    const previousValue = this.filter$.getValue();

    this.filter$.next({
      ...previousValue,
      pageNumber: page,
    });
  }
}
