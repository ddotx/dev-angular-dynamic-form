import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserListingComponent },
  { path: 'adduser', component: UserCreateComponent },
  { path: 'test', component: TestComponent},
  { path: '', redirectTo: 'dashboard', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
