import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceOperatorComponent } from './debounce-operator/debounce-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { PluckOperatorComponent } from './pluck-operator/pluck-operator.component';
import { RetryOperatorComponent } from './retry-operator/retry-operator.component';
import { SubjectOperatorComponent } from './subject-operator/subject-operator.component';
import { TakeOperatorComponent } from './take-operator/take-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';

const routes: Routes = [
  {path: 'mapOperator', component:MapOperatorComponent},
  {path: 'pluckOperator', component:PluckOperatorComponent},
  {path: 'filterOperator', component:FilterOperatorComponent},
  {path: 'tapOperator', component:TapOperatorComponent},
  {path: 'takeOperator', component:TakeOperatorComponent},
  {path: 'retryOperator', component:RetryOperatorComponent},
  {path: 'debounceOperator', component:DebounceOperatorComponent},
  {path: 'subjectOperator', component:SubjectOperatorComponent},
  {path: '**', redirectTo:'mapOperator'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
