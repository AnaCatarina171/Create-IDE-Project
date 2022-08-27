import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IDEDetailsComponent } from './idedetails-component/idedetails-component.component';
import { IDEsComponent } from './ides-component/ides-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IDEService } from './services/ide.service';

@NgModule({
  declarations: [
    AppComponent,
    IDEDetailsComponent,
    IDEsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IDEService],
  bootstrap: [AppComponent]
})
export class AppModule { }
