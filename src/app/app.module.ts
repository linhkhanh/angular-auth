import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticationService } from './services/authentication.service';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';


import { environment } from '../environments/environment.prod';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { CountingComponent } from './components/counting/counting.component';

import { CountingService } from './services/counting.service';
import { AddNumberComponent } from './components/add-number/add-number.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CountingComponent,
    AddNumberComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-auth'),
    AngularFirestoreModule,
  ],
  providers: [AuthenticationService, CountingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
