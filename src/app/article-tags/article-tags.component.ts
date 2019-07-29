import { Component, OnInit,ViewChild,ElementRef,Output ,EventEmitter, Input} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { TagService } from '../services/tag.service';
import { Tag } from '../classes/tag';

@Component({
  selector: 'app-article-tags',
  templateUrl: './article-tags.component.html',
  styleUrls: ['./article-tags.component.css']
})
export class ArticleTagsComponent implements OnInit{
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  tagCtrl = new FormControl();

  filteredTags: Observable<any[]>;

  tags = [];

  allTags : Tag[]=[];//{TagID:1,TagName:'Ruthy'},{TagID:2,TagName:'hedva'}

  @Output() selectedTagsEvent = new EventEmitter();
  @ViewChild('tagInput',{static: false}) tagInput: ElementRef;
   @Input() articleTags:Tag[];

  constructor(private tagService:TagService) {
  
    this.filteredTags = this.tagCtrl.valueChanges.pipe(  
     
        startWith(null),
        map((tagName: string | null) => tagName?  this.filter(tagName) : this.allTags.slice()));


        if(this.articleTags){
          this.tags=this.articleTags;
        }
  }

  ngOnInit() {
    this.tagService.getTags$().subscribe(data=>{
     
      this.allTags=data;
      
     });
     debugger;
    
  }

   remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.selectedTagsEvent.emit(this.tags);
    }
  }

  filter(name: string) {
  
    return this.allTags.filter(tag =>
        tag.TagName.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
   
    let t :Tag = { TagID:event.option.value, TagName:event.option.viewValue };
    debugger;
    this.tags.push(t);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
    this.selectedTagsEvent.emit(this.tags);
  }
}
