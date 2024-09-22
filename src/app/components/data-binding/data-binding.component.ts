import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule], //to use 2 way data binding
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

// string,number,boolean,date
// courseName: string = 123; strong typed gives error
  
  courseName: string = "Angular 18"; //name:datatype = "value";
  stateName: string = "Goa";
  inputType = "radio";

  rollNo : number = 123;

  isIndian: boolean = false;

  currentDate: Date = new Date();

  myClassName:string = "bg-primary";

  firstName = signal("jai bhatia");
  constructor(){

  }

  changeCourseName(){
    this.courseName = "React JS"; 
    this.firstName.set("bhupender jogi");
  }
  showAlert(message:string){
    alert(message);
  }
}
