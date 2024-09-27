import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe ,AsyncPipe ,UpperCasePipe ,LowerCasePipe,TitleCasePipe ,DatePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = "this is a demo session";

  currentDate : Date = new Date();

  currentTime : Observable<Date> = new Observable<Date>;

  student :any ={
    name: "jai",
    city : "fbd",
    empId : 1323,
    state:  'haryana'
  }

  constructor(){
    this.currentTime = interval(3000).pipe(map(() => new Date()));
  }
}
