import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../main.service';
import { Post } from '../../models/Post.interface';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  post!: Post;
  thumbnail: string = 'assets/imgs/';
  thumbnailDefault: string = 'assets/imgs/exm.png';
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe((data: Post) => {
      this.post = data;
    });
  }
}
