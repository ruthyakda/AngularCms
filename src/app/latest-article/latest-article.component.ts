import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { Article } from '../classes/article';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.css']
})
export class LatestArticleComponent implements OnInit {

  articles$ : Observable<Article[]>;

  constructor(private articleService:ArticleService,private router:Router) {

   }

  ngOnInit() {
    debugger;
   this.articles$= this.articleService.getLatestArticles$();
  
  }
  openCreateArticle(){
    this.router.navigate(["CreateArticle"]);
  }

  deleteArticle(article:Article){
    debugger;
    this.articleService.deleteArticle$(article.ID).subscribe(data=>{
     if(data)
     {alert('The article was delted succesfuly')
    this.router.navigate(['/LatestArticles']);}
     
    });
  }
}
