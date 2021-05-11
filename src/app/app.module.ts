import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { PluckOperatorComponent } from './pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { TapOperatorComponent } from './tap-operator/tap-operator.component';
import { TakeOperatorComponent } from './take-operator/take-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    MapOperatorComponent,
    PluckOperatorComponent,
    FilterOperatorComponent,
    TapOperatorComponent,
    TakeOperatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
