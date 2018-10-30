import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from './module/home/home.module';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditTableComponent } from './component/edit-table/edit-table.component';
import { MaterialTableComponent } from './component/material-table/material-table.component';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCardModule } from "@angular/material";
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { TradeService } from './unit-test/service/trade.service';
import { AddDialogComponent } from './component/material-table/add-dialog/add-dialog.component';
import { UpdateDialogComponent } from './component/material-table/update-dialog/update-dialog.component';
// import { TradeListComponent } from './unit-test/component/trade-list/trade-list.component';
// import { TradeViewComponent } from './unit-test/component/trade-view/trade-view.component';
// import { TestComponent } from './unit-test/component/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditTableComponent,
    MaterialTableComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AddDialogComponent,
    UpdateDialogComponent,
    // TradeListComponent,
    // TradeViewComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    HomeModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [TradeService],
  bootstrap: [AppComponent],
  entryComponents: [AddDialogComponent, UpdateDialogComponent]
})
export class AppModule {}