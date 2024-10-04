import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl : string = 'https://projectapi.gerasim.in/api/Complaint/';
  constructor(private  http :HttpClient) { }
    getAllDept(){
      debugger;
      return this.http.get(this.apiUrl + "GetParentDepartment")
    }

    saveNewDept(obj : any){
      return this.http.post(`${this.apiUrl}AddNewDepartment`, obj )
    }
}
