import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss'],
})
export class CharacterFilterComponent implements OnInit, OnDestroy {
  @Output() characterName = new EventEmitter<string>();

  private filterSub!: Subscription;

  filterInput = new FormControl();

  ngOnInit(): void {
    this.filterSub = this.filterInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(value => {
          this.characterName.emit(value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.filterSub) {
      this.filterSub.unsubscribe();
    }
  }
}
