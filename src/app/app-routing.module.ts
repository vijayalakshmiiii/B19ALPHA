import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path:'books',  component: BooksComponent},
  { path: '', component: BooksComponent },
  { path: '', component: BooksComponent, pathMatch: 'full' },
  { path: 'filter', component: BooksComponent },
  { path: 'search', component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
