import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Tag } from '../classes/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private client:HttpClient) { }

  getTags$():Observable<Tag[]>
 {
   return this.client.get<Tag[]>('https://angularcms.jpost.com/api/tag/getTags');
 }
}
