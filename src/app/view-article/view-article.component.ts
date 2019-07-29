import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../classes/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  @Input() articleInput: Article;

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
  }

  deleteArticle(id:number){
   this.articleService.deleteArticle$(id).subscribe(data=>console.log(data));
  }
}
