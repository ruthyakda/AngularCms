import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Reporter } from '../classes/reporter';
import { ReporterService } from '../services/reporter.service';
import { Observable } from 'rxjs';
import {MatFormFieldControl} from '@angular/material/form-field'

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {

reporters$:Observable<Reporter[]>;
selected :number;
@Output() selectedReporter = new EventEmitter();
// @Input() articleReporter:Reporter;
  constructor(private reporterService:ReporterService) { 
   this.reporters$ = this.reporterService.getReporters$();
  }

  ngOnInit() {
    // this.selected=this.articleReporter;
  }

  onSelectedChanged(reporterID:number){
   
    let reporter:Reporter=new Reporter();
    reporter.ReporterID=reporterID;
    reporter.ReporterName="";
    this.selectedReporter.emit(reporter);
  }
}
