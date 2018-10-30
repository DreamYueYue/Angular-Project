import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/component/home/home.component";
import { EditTableComponent } from "src/app/component/edit-table/edit-table.component";
import { MaterialTableComponent } from "src/app/component/material-table/material-table.component";
import { TemplateDrivenFormComponent } from "src/app/component/template-driven-form/template-driven-form.component";
import { ReactiveFormComponent } from "src/app/component/reactive-form/reactive-form.component";

export const ROUTES: Routes = [{
  path: 'home',
  component: HomeComponent,
  data: {
    animation: 'homePage'
  }
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'table',
  component: EditTableComponent,
  data: {
    animation: 'tablePage'
  }
}, {
  path: 'materialTable',
  component: MaterialTableComponent,
  data: {
    animation: 'materialTablePage'
  }
}, {
  path: 'tbform',
  component: TemplateDrivenFormComponent,
  data: {
    animation: 'tbformPage'
  }
}, {
  path: 'rform',
  component: ReactiveFormComponent,
  data: {
    animation: 'rformPage'
  }
}];