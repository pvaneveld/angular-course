import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { WarningComponent } from './WarningAlert/warning-alert.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
  declarations: [ // all components
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccesAlertComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // root component
})
export class AppModule { }
