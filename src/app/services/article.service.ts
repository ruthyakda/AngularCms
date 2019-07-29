import { Injectable } from '@angular/core';
import {Article } from '../classes/article'
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import * as $ from 'jquery';
import { Img } from '../classes/img';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

article:Article;

  constructor(private client : HttpClient) { }


 createArticle$(a:Article){

   $.post("https://angularcms.jpost.com/api/article/CreateArticle", a, function (data, status) {
    if(data && status=="success")
    {
      debugger;
     alert('The article was saved successfuly');
     
    }
     
    else {
      alert('The article was not saved ');
     
    };
  });
 }

 updateArticle(a:Article){
    $.post("https://angularcms.jpost.com/api/article/UpdateArticle", a, function (data, status) {
    if(data && status=="success")
     {alert('The article was saved successfuly');
    }
    else {
      alert('The article was not saved ');
     
    }
  });
 }



 getArticleByID$(id:number):Observable<Article>{

   return this.client.get<Article>("https://angularcms.jpost.com/api/article/getArticleByID/"+id)
   .pipe(map(article=>{
    if (article && article.ID) {
    
      return article;
    }
   }
   ));
 }

 getLatestArticles$():Observable<Article[]>
 {
  return this.client.get<Article[]>('https://angularcms.jpost.com/api/article/getLatestArticles');
 }

 deleteArticle$(id:number):Observable<any>{
  
    return this.client.get<any>('https://angularcms.jpost.com/api/article/DeleteArticle/'+id);
 }

}