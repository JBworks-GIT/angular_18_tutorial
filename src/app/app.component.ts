import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@Component({ // component decorator
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent], //to use any external component we have  to import component in this
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
