import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostAdminService } from '../../admin.service';
import { Category } from '../../models/Category.interface';
import { Post } from '../../models/Post.interface';

@Component({
  selector: 'app-admin-update-page',
  templateUrl: './admin-update-page.component.html',
  styleUrls: ['./admin-update-page.component.scss'],
})
export class AdminUpdatePageComponent implements OnInit {
  @Input()
  detail!: Post;

  categories!: Category[];

  today = new Date();
  todayMs = this.today.getTime();
  thumbnail: string = 'assets/imgs/';
  constructor(
    private route: ActivatedRoute,
    private postService: PostAdminService
  ) {}

  imageNew: string = '';
  ngOnInit(): void {
    this.postService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
    const id = +this.route.snapshot.params['id'];
    this.postService.getPost(id).subscribe((data: Post) => {
      this.detail = data;
    });
    console.log('init image', this.detail);
  }

  onUpdatePost(event: Post) {
    console.log('event==', event);
    if (this.imageNew.length !== 0) {
      event = { ...event, image: this.imageNew };
    }
    this.postService.updatePost(event).subscribe((data: Post) => {
      this.detail = { ...this.detail, ...event };
    });
    alert('Đã fix thành công');
  }

  uploadImage(value: any, event: any) {
    console.log('uploadImage', event.target.files[0].name);
    console.log('value', value);
    const file = event.target.files[0];
    // const path = `posts/${file.name}`;

    if (file.type.split('/')[0] !== 'image') {
      return alert(
        'Chỉ được nhập 1 file định dạng ảnh lên - Tiếp tục sẽ gây lỗi'
      );
    } else {
      this.imageNew = event.target.files[0].name;
      console.log('image', this.imageNew);
      // return (this.detail = event.target.files[0].name);
    }
  }
  toggleCheckIn(special: boolean): void {
    this.detail.special = !special;
  }
  handleSubmit(post: Post, isValid: boolean | null) {
    if (isValid) {
      this.onUpdatePost(post);
      // console.log('post', post);
    }
  }
}
