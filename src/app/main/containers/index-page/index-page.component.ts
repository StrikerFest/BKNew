import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../main.service';
import { Category } from '../../models/Category.interface';
import { Post } from '../../models/Post.interface';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit {
  title: string = 'Title of the weekends';
  titleSpecial: string = 'Tin tức đáng chú ý';
  titleNewest: string = 'Tin tức mới nhất';
  titleCate: string = 'Tin tức theo danh mục';
  thumbnail: string = 'assets/imgs/';
  thumbnailDefault: string = 'assets/imgs/exm.png';
  content: string =
    'Bla nos caon kalo to reva lani bara lani lada raviola tara kao mani man nali lopoas';

  posts!: Post[];
  postsSpecial!: Post[];
  postsCate!: Post[];

  categories!: Category[];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: Post[]) => {
      data = data.reverse();
      this.posts = data;
      this.postsSpecial = data.filter((e) => {
        return e.special == true;
      });
    });
    this.postService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  // onUpdatePost(event: Post) {
  //   this.postService.updatePost(event).subscribe((data: Post) => {
  //     this.post = { ...this.post, ...event };
  //   });
  // }

  onClick(postId: number) {
    this.router.navigate(['/post', postId]);
  }
}
