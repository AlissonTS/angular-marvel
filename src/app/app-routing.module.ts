import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListWithFilterComponent } from './character-list-with-filter/character-list-with-filter.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

const routes: Routes = [
  { path: '', component: CharacterListWithFilterComponent },
  { path: 'characters-list', component: CharacterListWithFilterComponent },
  {
    path: 'character-info/:id',
    component: CharacterInfoComponent,
  },
  { path: '**', redirectTo: '/characters-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
