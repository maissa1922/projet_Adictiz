import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { MatDialogModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BookDetailsDialogComponent } from './components/book-details-dialog/book-details-dialog.component';


const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'book-list',      component: BookListComponent },
  {
    path: 'book-list',
    component: BookListComponent,
    data: { title: 'List of Books' }
  },
  { path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookListComponent,
    FilterPipe,
    BookDetailsDialogComponent
  ],
  entryComponents: [BookDetailsDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
