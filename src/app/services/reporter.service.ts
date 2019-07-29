import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporter } from '../classes/reporter';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {

  constructor(private http:HttpClient) { }

  getReporters$():Observable<Reporter[]>{
     return this.http.get<Reporter[]>('https://angularcms.jpost.com/api/reporter/GetReporters');
  }
}
