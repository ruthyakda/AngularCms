import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../classes/img'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private client : HttpClient) { }

getImages$():Observable<Img[]>
{
  return  this.client.get<Img[]>('https://angularcms.jpost.com/api/image/getImages')
}

}
