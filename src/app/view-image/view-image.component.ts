import { Component, OnInit, Input } from '@angular/core';
import { Img } from '../classes/img';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

  @Input() imageInput : Img;


  constructor() { }

  ngOnInit() {
  }

}
