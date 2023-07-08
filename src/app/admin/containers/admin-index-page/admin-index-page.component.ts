import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostAdminService } from '../../admin.service';
import { Post } from '../../models/Post.interface';

@Component({
  selector: 'app-admin-index-page',
  templateUrl: './admin-index-page.component.html',
  styleUrls: ['./admin-index-page.component.scss'],
})
export class AdminIndexPageComponent implements OnInit {
  posts!: Post[];
  thumbnail: string = 'assets/imgs/';
  thumbnailDefault: string = 'assets/imgs/exm.png';

  constructor(
    private postAdminService: PostAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postAdminService.getPosts().subscribe((data: Post[]) => {
      data = data.reverse();
      this.posts = data;
    });
  }

  onClickDetail(postId: number) {
    this.router.navigate(['/admin/post', postId]);
  }

  onClickUpdate(postId: number) {
    this.router.navigate(['/admin/update', postId]);
  }

  onClickCreate() {
    this.router.navigate(['/admin/create']);
  }

  onClickRemove(event: Post) {
    // this.router.navigate(['/admin/create']);
    this.postAdminService.deletePost(event).subscribe((data: Post) => {
      this.posts = this.posts.filter((post: Post) => post.id != event.id);
    });
  }
}
