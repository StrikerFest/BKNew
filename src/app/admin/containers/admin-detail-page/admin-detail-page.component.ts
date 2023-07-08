import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostAdminService } from '../../admin.service';
import { Post } from '../../models/Post.interface';

@Component({
  selector: 'app-admin-detail-page',
  templateUrl: './admin-detail-page.component.html',
  styleUrls: ['./admin-detail-page.component.scss'],
})
export class AdminDetailPageComponent implements OnInit {
  post!: Post;
  thumbnail: string = 'assets/imgs/';
  thumbnailDefault: string = 'assets/imgs/exm.png';
  constructor(
    private route: ActivatedRoute,
    private postService: PostAdminService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe((data: Post) => {
      this.post = data;
    });
  }
}
