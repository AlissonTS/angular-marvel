import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICharacter } from '../model/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character!: ICharacter;

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigate(['character-info', this.character.id]);
  }
}
