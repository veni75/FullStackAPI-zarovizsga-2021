import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

registerLocaleData(localeHu);

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { XPipePipe } from './pipe/x-pipe.pipe';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';
import { CarCreateComponent } from './page/car-create/car-create.component';
import { CarEditComponent } from './page/car-edit/car-edit.component';
import { CarComponent } from './page/car/car.component';
import { CustomerComponent } from './page/customer/customer.component';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { RaceComponent } from './page/race/race.component';
import { RaceEditComponent } from './page/race-edit/race-edit.component';
import { ServiceComponent } from './page/service/service.component';
import { ServiceEditComponent } from './page/service-edit/service-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DashboardComponent,
    DataTableComponent,
    XPipePipe,
    CarComponent,
    CarCreateComponent,
    CarEditComponent,
    CustomerComponent,
    CustomerEditComponent,
    RaceComponent,
    RaceEditComponent,
    ServiceComponent,
    ServiceEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu-HU'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
