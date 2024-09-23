import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],//to use directive
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean = true;
  isDiv2Visible:boolean = false;

num1:string = '';
num2:string = '';
isActive : boolean = false;
selectedState :string = '';

cityArray:string[] = ['Pune','Mumbai','Nagpur','Thane'];
studentList: any[] = [
  {studId:12, name:"AAA", city:"Pune", isActive:false},
  {studId:22, name:"BBB", city:"Mumbai", isActive:false},
  {studId:32, name:"CC", city:"Jalgao", isActive:true},
  {studId:56, name:"DD", city:"Mumbai", isActive:false},
  {studId:34, name:"EE", city:"Nagpur", isActive:false},
  {studId:76, name:"FFF", city:"Thane", isActive:false},
]

  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }
  //ngfor needs array to work upon
}
