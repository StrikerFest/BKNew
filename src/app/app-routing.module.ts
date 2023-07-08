import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreatePageComponent } from './admin/containers/admin-create-page/admin-create-page.component';
import { AdminDetailPageComponent } from './admin/containers/admin-detail-page/admin-detail-page.component';
import { AdminIndexPageComponent } from './admin/containers/admin-index-page/admin-index-page.component';
import { AdminUpdatePageComponent } from './admin/containers/admin-update-page/admin-update-page.component';
import { DetailPageComponent } from './main/containers/detail-page/detail-page.component';
import { IndexPageComponent } from './main/containers/index-page/index-page.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'index', component: IndexPageComponent },
  { path: 'home', component: IndexPageComponent },
  { path: 'post/:id', component: DetailPageComponent },
  //
  { path: 'admin', component: AdminIndexPageComponent },
  { path: 'admin/post/:id', component: AdminDetailPageComponent },
  { path: 'admin/create', component: AdminCreatePageComponent },
  { path: 'admin/update/:id', component: AdminUpdatePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
