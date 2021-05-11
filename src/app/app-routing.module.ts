import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { PluckOperatorComponent } from './pluck-operator/pluck-operator.component';

const routes: Routes = [
  {path: 'mapOperator', component:MapOperatorComponent},
  {path: 'pluckOperator', component:PluckOperatorComponent},
  {path: 'filterOperator', component:FilterOperatorComponent},
  {path: '**', redirectTo:'mapOperator'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
