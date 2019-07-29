import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module'
import {CreateArticleComponent} from './create-article/create-article.component'
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import {ViewArticleComponent} from './view-article/view-article.component'
import { from } from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {
  MatFormFieldModule, 
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatChipsModule,
  MatAutocompleteModule,MatSelectModule
} 
  from '@angular/material';
import { SearchImagesComponent } from './search-images/search-images.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { FilterPipe } from './pipes/filter.pipe'; 
import {CommonModule} from '@angular/common';
import { ArticleTagsComponent } from './article-tags/article-tags.component';
import { ReporterComponent } from './reporter/reporter.component';
import {SideNavComponent} from './side-nav/side-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LatestArticleComponent ,  
    CreateArticleComponent,
    ViewArticleComponent,
    SearchImagesComponent,
    ViewImageComponent,
    FilterPipe,
    ArticleTagsComponent,
    ReporterComponent,
    SideNavComponent
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatDialogModule,
    MatChipsModule,
  MatAutocompleteModule,MatSelectModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[SearchImagesComponent]
})
export class AppModule { }
