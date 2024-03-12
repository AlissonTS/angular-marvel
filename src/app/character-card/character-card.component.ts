import { Component, Input } from '@angular/core';
import { ICharacter } from '../model/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character!: ICharacter;

  constructor(private router: Router) {}

  navigate(): void {
    console.log('teste');
    this.router.navigate(['character-info', this.character.id]);
  }
}
