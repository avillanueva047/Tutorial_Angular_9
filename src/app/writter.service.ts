import { Injectable } from '@angular/core';
import { Writter } from './writter';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WritterService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private writtersUrl = 'api/writters';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private log(message: string) {
    this.messageService.add(`WritterService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: $(error.message)`);
      return of(result as T);
    }
  }

  getWritters(): Observable<Writter[]> {
    return this.http.get<Writter[]>(this.writtersUrl)
      .pipe(
        tap(_ => this.log('fetched writters')),
        catchError(this.handleError<Writter[]>
          ('getWritters', []))
      );
  }

  getWritter(id: number): Observable<Writter> {
    const url = `${this.writtersUrl}/${id}`;
    return this.http.get<Writter>(url).pipe(
      tap(_ => this.log(`fetched writter id=${id}`)),
      catchError(this.handleError<Writter>(`getWritter id=${id}`))
    );
  }

  updateWritter(writter: Writter): Observable<any> {
    return this.http.put(this.writtersUrl, writter, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated writter id=${writter.id}`)),
        catchError(this.handleError<any>('updateWritter'))
      );
  }

  addWritter(writter: Writter): Observable<Writter> {
    return this.http.post<Writter>(this.writtersUrl, writter, this.httpOptions)
      .pipe(
        tap((newWritter: Writter) => this.log(`Added Writter w/ id=${newWritter.id}`)),
        catchError(this.handleError<Writter>('addWritter'))
      );
  }

  deleteWritter(writter: Writter | number): Observable<Writter> {
    const id = typeof writter === 'number' ? writter : writter.id;
    const url = `${this.writtersUrl}/${id}`;

    return this.http.delete<Writter>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Writter>('deleteWritter'))
    );
  }

  searchWritters(term: string): Observable<Writter[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Writter[]>(`${this.writtersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found writters matching "${term}"`):
        this.log(`no writters matching "${term}"`)),
        catchError(this.handleError<Writter[]>('searchWritters', []))
    );
  }

}
