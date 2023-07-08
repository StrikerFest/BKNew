import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexPageComponent } from './containers/index-page/index-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostService } from './main.service';
import { DetailPageComponent } from './containers/detail-page/detail-page.component';

@NgModule({
  declarations: [IndexPageComponent, NavbarComponent, DetailPageComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [PostService],
  exports: [IndexPageComponent],
})
export class MainModule {}
