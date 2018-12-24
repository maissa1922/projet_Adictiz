import { MatDialog, MatDialogRef} from '@angular/material'
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  private searchValue : string;

  private books : any[];

  constructor(private bookService : BookService,
    public dialog : MatDialog) { }


  ngOnInit() {
   this.searchValue = this.bookService.getSearchStr();
   this.bookService.getBooks(this.searchValue).subscribe(
      data => {
        this.books = data.items,
        console.log(this.books);
      }
    );
  }

  openDialog(book?) {
    const dialogRef = this.dialog.open(BookDetailsDialogComponent,{
      data: {
        book: book.volumeInfo,
      }
    });
      

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}