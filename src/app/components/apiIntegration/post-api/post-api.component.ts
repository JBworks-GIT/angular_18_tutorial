import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusablecomponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusablecomponent/my-button/my-button.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, JsonPipe,AlertComponent,MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent implements OnInit {
  deptList: any[] = [];

  ngOnInit(): void {
    this.getDepartment();
  }

  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: ' ',
  };
  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) {}

  
  // onSave() {
  //   debugger;
  //   this.http
  //     .post(
  //       'https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
  //       this.deptObj
  //     )
  //     .subscribe((res: any) => {
  //       debugger;
  //       if (res.result) {
  //         alert('department created success');
  //         this.getDepartment();
  //       } else {
  //         alert(res.message);
  //       }
  //     });
  // }

  // getDepartment() {
  //   this.http
  //     .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
  //     .subscribe((res: any) => {
  //       this.deptList = res.data;
  //     });
  // }

  getDepartment() {
    debugger;
    this.deptSrv.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptList = res.data;
    });
  }

  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) =>{
      if (res.result) {
        alert('department created success');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  clickOnEdit(data: any) {
    this.deptObj = data;
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptObj
      )
      .subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('department updated success');
          this.getDepartment();
        } else {
          alert(res.message);
        }
      });
  }

  onUpdate() {
    debugger;
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptObj
      )
      .subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert('department updated success');
          this.getDepartment();
        } else {
          alert(res.message);
        }
      });
  }
  getData(data : any){
    debugger;
  }
  clickOnDelete(data: any) {
    debugger;
    const isDelete = confirm('are you sure to delete?');
    if (isDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            data
        )
        .subscribe((res: any) => {
          debugger;
          if (res.result) {
            alert('department deleted success');
            this.getDepartment();
          } else {
            alert(res.message);
          }
        });
    }
  }
}
