import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';

import { IResponse } from 'src/app/model/response.model';
import { IResponseData } from 'src/app/model/response-data.model';
import { ICharacter } from 'src/app/model/character.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(name = '', offset = 0): Observable<IResponseData> {
    let params = new HttpParams();
    params = params.append('ts', 1);
    params = params.append('apikey', environment.PUBLIC_KEY);
    params = params.append('hash', environment.HASH_MD5);

    if (name && name.length > 0) {
      params = params.append('nameStartsWith', name);
    }

    if (offset) {
      params = params.append('offset', offset);
    }

    return this.http
      .get<IResponse>(`${environment.API_URL}/characters`, {
        params: params,
      })
      .pipe(
        map(response => response.data),
        catchError(() => {
          return of({
            limit: 0,
            total: 0,
            count: 0,
            results: [],
          });
        })
      );
  }

  getCharacterById(id: number): Observable<ICharacter> {
    return this.http
      .get<IResponse>(`${environment.API_URL}/characters/${id}`, {
        params: {
          ts: 1,
          apikey: environment.PUBLIC_KEY,
          hash: environment.HASH_MD5,
        },
      })
      .pipe(map(response => response.data.results[0]));
  }
}
