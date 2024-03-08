import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterInfoComponent } from './character-info/character-info.component';

@NgModule({
  declarations: [CharacterInfoComponent],
  imports: [CommonModule, CharacterRoutingModule],
})
export class CharacterModule {}
