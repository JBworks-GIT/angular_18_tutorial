import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@Component({ // component decorator
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, EmployeelistComponent], //to use any external component we have  to import component in this
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
