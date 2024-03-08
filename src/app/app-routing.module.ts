import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from './characters-list/characters-list.component';

const routes: Routes = [
  { path: '', component: CharactersListComponent },
  { path: 'characters-list', component: CharactersListComponent },
  {
    path: 'character-info',
    loadChildren: () =>
      import('./character/character.module').then(m => m.CharacterModule),
  },
  { path: '**', redirectTo: '/characters-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
