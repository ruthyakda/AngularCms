import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Observable } from 'rxjs';
import { Img } from '../classes/img';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {

  images$:Observable<Img[]>;
  filterImage:string;
  selectedImage:Img;
  isSelected:boolean;

  constructor(private imageServies :ImageService,public dialogRef: MatDialogRef<SearchImagesComponent>) { }

  ngOnInit() {
   this.images$ = this.imageServies.getImages$();
   debugger
  }

  close(): void {
   this.dialogRef.close();
  }

selectImage(image:Img){
  debugger;
  this.selectedImage = image;
  
  image.IsSelected=true;
}

}
