import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BookFilterComponent } from './components/book-filter/book-filter.component';
import {  MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import {  MatDividerModule } from "@angular/material/divider";
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { MatSliderModule } from "@angular/material/slider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookFilterComponent,
    PriceFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatSliderModule,
    MatAutocompleteModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
