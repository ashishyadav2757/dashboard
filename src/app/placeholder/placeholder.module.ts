import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularNavComponent } from '../angular/angular-nav/angular-nav.component';
import { TechNavComponent } from '../tech-information/tech-nav/tech-nav.component';
import { TypescriptNavComponent } from '../typescript/typescript-nav/typescript-nav.component';
import { RxNavComponent } from '../rxjs/rxjs-nav/rx-nav.component';
import { JavacriptNavComponent } from '../javascript/javascript-nav/javascript-nav.component';
import { JavaNavComponent } from '../java/java-nav/java-nav.component';
const routes: Routes = [

  {
    path:'angular', component:AngularNavComponent
  },

  {
    path:'tech_info', component:TechNavComponent
  },
  {
    path:'typescript', component:TypescriptNavComponent
  },
  {
    path:'rxjs', component:RxNavComponent
  },
  {
    path:'javascript', component:JavacriptNavComponent
  },
  {
    path:'java', component:JavaNavComponent
  }
];

@NgModule({
  declarations: [
    PlaceholderComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PlaceholderComponent
  ]
})
export class PlaceholderModule { }
