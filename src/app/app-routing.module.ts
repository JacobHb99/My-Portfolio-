import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressComponent } from './impress/impress.component';

const routes: Routes = [
  {
    path: 'impress',
    component: ImpressComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling : "enabled"
    }),
    
  ],
    
  exports: [RouterModule]

})
export class AppRoutingModule { }
