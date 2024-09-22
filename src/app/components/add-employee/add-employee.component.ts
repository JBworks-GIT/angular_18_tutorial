import { Component } from '@angular/core';

@Component({ //component decorator 
  selector: 'app-add-employee', //unique name call using this
  standalone: true, // not dependant on anyone like model component before
  imports: [],
  templateUrl: './add-employee.component.html', //html file
  styleUrl: './add-employee.component.css' // component css
})
export class AddEmployeeComponent {

}
