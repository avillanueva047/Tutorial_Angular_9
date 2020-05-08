import { Component, OnInit } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Writter } from '../writter';
import { WritterService } from '../writter.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  writters$: Observable<Writter[]>;
  private searchTerms = new Subject<string>();

  constructor(private writterService: WritterService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.writters$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.writterService.searchWritters(term)
      ),
    );
  }

}
