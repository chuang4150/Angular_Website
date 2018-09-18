import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ContactComponent } from './contact/contact.component'

const appRoutes: Routes = [
  { path: '',  redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponentComponent },

  ];

  @NgModule({
imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      ),

    ],
    exports: [
        RouterModule
    ]
  })

  export class AppRoutingModule {}
