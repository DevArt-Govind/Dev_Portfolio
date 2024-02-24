import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
// import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "sub-page/about",
    component: AboutComponent
  },
  {
    path: "sub-page/work",
    component: WorkComponent
  },
  {
    path: "sub-page/contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
