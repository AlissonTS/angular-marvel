import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-character-pagination',
  templateUrl: './character-pagination.component.html',
  styleUrls: ['./character-pagination.component.scss'],
})
export class CharacterPaginationComponent implements OnChanges {
  @Input() limit = 20;
  @Input() totalRecords = 0;

  @Output() newPage = new EventEmitter<number>();

  currentPage = 0;
  numberPages = 0;

  ngOnChanges(): void {
    this.currentPage = 0;
    this.numberPages = Math.floor(this.totalRecords / this.limit);
  }

  nextPage(): void {
    this.currentPage += 1;

    this.emitNewPage();
  }

  goToFirstPage(): void {
    this.currentPage = 0;

    this.emitNewPage();
  }

  goToLastPage(): void {
    this.currentPage = this.numberPages;

    this.emitNewPage();
  }

  previousPage(): void {
    this.currentPage -= 1;

    this.emitNewPage();
  }

  private emitNewPage(): void {
    this.newPage.emit(this.currentPage);
  }
}
