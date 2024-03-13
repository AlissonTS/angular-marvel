import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CharacterService } from './character.service';
import {
  mockCharacter,
  mockCharactersList,
  mockResponseCharactersList,
} from 'src/app/testing/mock-character';
import { environment } from 'src/environments/environment';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterService],
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list characters', () => {
    service.getCharacters().subscribe(data => {
      expect(data).toEqual(mockCharactersList);
    });

    const req = httpMock.expectOne(
      `${environment.API_URL}/characters?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH_MD5}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponseCharactersList);
    httpMock.verify();
  });

  it('should get character by id', () => {
    const id = 1;

    service.getCharacterById(id).subscribe(data => {
      expect(data).toEqual(mockCharacter);
    });

    const req = httpMock.expectOne(
      `${environment.API_URL}/characters/${id}?ts=1&apikey=${environment.PUBLIC_KEY}&hash=${environment.HASH_MD5}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponseCharactersList);
    httpMock.verify();
  });
});
