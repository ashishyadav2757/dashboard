import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StartupComponent } from './angular/components/startup/startup.component';
import { AngularNavComponent } from './angular/angular-nav/angular-nav.component';
import { AngularDemoComponent } from './angular/components/angular-demo/angular-demo.component';
import { TicTacIconComponent } from './angular/components/angular-demo/tic-tac-icon/tic-tac-icon.component';
import { PlaceholderModule } from './placeholder/placeholder.module';
import { TechNavComponent } from './tech-information/tech-nav/tech-nav.component';
import { LinksComponent } from './tech-information/component/links/links.component';
import { TypescriptComponent } from './typescript/component/typescript/typescript.component';
import { TypescriptNavComponent } from './typescript/typescript-nav/typescript-nav.component';
import { RxjsComponent } from './rxjs/component/rxjs/rxjs.component';
import { RxNavComponent } from './rxjs/rxjs-nav/rx-nav.component';
import { ToAppComponent } from './angular/components/angular-demo/todoApp/to-app/to-app.component';
import { TodoFormComponent } from './angular/components/angular-demo/todoApp/todo-form/todo-form.component';
import { FormsModule } from '@angular/forms';
import { PasswordManagerComponent } from './tech-information/component/password-manager/password-manager.component';

import { JavascriptComponent } from './javascript/component/javascript/javascript.component';
import { JavacriptNavComponent } from './javascript/javascript-nav/javascript-nav.component';

import { JavaComponent } from './java/component/java/java.component';
import { Java2Component } from './java/component/java2/jav2.component';
import { JavaNavComponent } from './java/java-nav/java-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartupComponent,
    AngularNavComponent,
    TypescriptComponent,
    AngularDemoComponent,
    TicTacIconComponent,
    TechNavComponent,
    LinksComponent,
    TypescriptNavComponent,
    RxjsComponent,
    RxNavComponent,
    ToAppComponent,
    TodoFormComponent,
    PasswordManagerComponent,
    JavascriptComponent,
    JavacriptNavComponent,
    JavaComponent,
    JavaNavComponent,
    Java2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlaceholderModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
