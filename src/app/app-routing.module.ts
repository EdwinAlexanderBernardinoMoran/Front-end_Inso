import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './alumnos/create/create.component';
import { EditComponent } from './alumnos/edit/edit.component';
import { IndexComponent } from './alumnos/index/index.component';

const routes: Routes = [
  // Ruta de Alumnos
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent},
  { path: 'index', component:IndexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
