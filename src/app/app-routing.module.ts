import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './membership/register/register.component';
import { InfoComponent } from './membership/info/info.component';

const routes: Routes = [
  {
    path: 'membership',
    children: [
      {
        path: 'register',
        component: InfoComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/membership/register',
  },
  {
    path: '',
    redirectTo: '/membership/register',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
