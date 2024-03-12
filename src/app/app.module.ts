import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListWithFilterComponent } from './character-list-with-filter/character-list-with-filter.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharacterPaginationComponent } from './character-pagination/character-pagination.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListWithFilterComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterFilterComponent,
    CharacterInfoComponent,
    CharacterPaginationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
