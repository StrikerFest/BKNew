import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostAdminService } from './admin.service';
import { AdminIndexPageComponent } from './containers/admin-index-page/admin-index-page.component';
import { AdminDetailPageComponent } from './containers/admin-detail-page/admin-detail-page.component';
import { AdminCreatePageComponent } from './containers/admin-create-page/admin-create-page.component';
import { AdminUpdatePageComponent } from './containers/admin-update-page/admin-update-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdminIndexPageComponent,
    AdminDetailPageComponent,
    AdminCreatePageComponent,
    AdminUpdatePageComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [PostAdminService],
  exports: [AdminIndexPageComponent],
})
export class AdminModule {}
