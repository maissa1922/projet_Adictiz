import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/Operators';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable({
    providedIn : 'root'
})
export class BookService {

    private googleApi = 'https://www.googleapis.com/books/v1/volumes?q=';
    private searchUrl : string;

    private strSource = new BehaviorSubject('default');
    searchStr = this.strSource.asObservable();

    searchValue : string;

    constructor(private http : HttpClient){}

    getBooks(bookName : string) : Observable<any> {
        this.searchUrl = this.googleApi + bookName;
        return this.http.get(this.searchUrl)
        .pipe(
            map(data => data)
        );
    }


    getSearchStr() : string {
        this.searchStr.subscribe(str => {this.searchValue = str});
        return this.searchValue;
    }

    setSearchStr(str : string) {
        this.strSource.next(str);
    }

}
