import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapOperatorComponent } from './map-operator/map-operator.component';

const routes: Routes = [
  {path: 'mapOperator', component:MapOperatorComponent},
  {path: '**', redirectTo:'mapOperator'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
