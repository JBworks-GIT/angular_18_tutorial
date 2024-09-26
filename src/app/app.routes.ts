import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path:'data-binding',
        component: DataBindingComponent
    },
    {
        path:'emp-list',
        component: EmployeelistComponent
    },
    {
        path:'if-else',
        component: IfelseComponent
    },
    {
        path:'structural-dir',
        component: StructuralDirectiveComponent
    },
    {
        path:'attributedirective',
        component: AttributeDirectiveComponent
    }
];
