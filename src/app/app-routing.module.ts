import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LatestArticleComponent} from './latest-article/latest-article.component'
import { LoginComponent } from './login/login.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SearchImagesComponent } from './search-images/search-images.component';
import { ArticleTagsComponent } from './article-tags/article-tags.component';

const routes: Routes = [
  {path:"",component: LoginComponent, pathMatch: 'full'},
  {path:"LatestArticles",component: LatestArticleComponent, canActivate:[AuthGuardService]},
  {path:"CreateArticle",component: CreateArticleComponent,canActivate:[AuthGuardService]},
  {path:"EditArticle/:id",component: CreateArticleComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuardService]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
