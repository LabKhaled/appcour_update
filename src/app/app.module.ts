import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import {AppareilService} from './Services/appareil.service';
import {AuthService} from './Services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { from } from 'rxjs';
const appRoutes: Routes= [{path:'appareils',component:AppareilViewComponent},
                          {path:'auth',component:AuthComponent},
                          {path:'',component:AppareilViewComponent
                           }

];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [AppareilService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
