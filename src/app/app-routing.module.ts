import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  // {path: 'table', component: TableComponent },
  // {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'default',component: DefaultComponent,
    children: [{
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'templete',
        component: TemplateDrivenFormComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
