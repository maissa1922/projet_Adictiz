import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr : string;

  constructor(private bookService : BookService) { }

  ngOnInit() {
  }

  searchBook(){
    this.bookService.setSearchStr(this.searchStr);
  }

}