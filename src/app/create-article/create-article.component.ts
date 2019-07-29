import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Article } from '../classes/article'
import {ArticleService } from '../services/article.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SearchImagesComponent } from '../search-images/search-images.component';
import { observable } from 'rxjs';
import {Img} from '../classes/img'
import { Tag } from '../classes/tag';
import { Reporter } from '../classes/reporter';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  public Editor = ClassicEditor;
  article:Article ; 
  articleImage:Img;
  articleTags:Tag[];
  articleReporter:Reporter;


  CreateArticleForm = new FormGroup({
    ID:new FormControl(''),
    Title : new FormControl(''),
    Teaser: new FormControl(''),
    Body:new FormControl(''),
    Image:new FormControl(''),
    Tags:new FormControl([]),
    Reporter:new FormControl('')
    })

 

  constructor(private s:ArticleService,private activatedRoute:ActivatedRoute,private route :Router,public dialog: MatDialog) { 
  
   const id = this.activatedRoute.snapshot.params.id;
    if (id !== undefined)
    {
     this.s.getArticleByID$(id).subscribe(data=> {
      this.article=data;    
       
      this.CreateArticleForm.patchValue(this.article);
      this.articleImage=this.article.image;
      this.articleTags=this.article.tags;
      this.articleReporter=this.article.reporter;
    });
  }
    
  }

  ngOnInit() {
  
  }

  onSubmit()
  {
   
    this.CreateArticleForm.patchValue({'Image':this.articleImage})
    this.CreateArticleForm.patchValue( {'Tags':this.articleTags})
    this.CreateArticleForm.patchValue({'Reporter':this.articleReporter});
    const a : Article = this.CreateArticleForm.value;

    if(this.CreateArticleForm.value.ID!=undefined&&this.CreateArticleForm.value.ID>0){
      debugger;
     this.s.updateArticle(a);
    }
    else{
     this.s.createArticle$(a);

    }
    
  
  
  }

  openSearchImages(): void {
    debugger;
    const dialogRef = this.dialog.open(SearchImagesComponent, {
      width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
    
      this.articleImage = result;
      console.log('The dialog was closed');
    });
  }

  getSelectedTags(data){
    debugger;
   this.articleTags=data;
  }

  cancelArticle(){
    this.route.navigate(['LatestArticles']);
  }

  getSelectedReporter(data){
    debugger;
    this.articleReporter=data;
   
  }
}