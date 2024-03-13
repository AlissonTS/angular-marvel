import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../services/character/character.service';
import { ICharacter } from '../model/character.model';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent implements OnInit {
  characterInfo!: ICharacter;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (id > 0) {
        this.getCharacterInfo(id);
      }
    });
  }

  getCharacterInfo(id: number): void {
    this.characterService
      .getCharacterById(id)
      .subscribe(response => (this.characterInfo = response));
  }

  returnToList(): void {
    this.router.navigate(['/characters-list']);
  }
}
