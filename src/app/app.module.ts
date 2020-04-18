import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// firebase
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'

import { ModalModule } from "ngx-bootstrap/modal";
import { HttpClientModule } from '@angular/common/http'; 
import {environment} from '../environments/environment'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {DataFilterPipe} from './pipes/data-filter'
import { DataTableModule } from 'angular2-datatable';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { CardsDBComponent } from './views/cards-db/cards-db.component';
import { CardServiceService } from './services/card-service.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    ModalModule.forRoot(),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2CompleterModule,
    DataTableModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    CardsDBComponent,
    DataFilterPipe,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  CardServiceService
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
