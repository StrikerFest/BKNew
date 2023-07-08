import {
  Component,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { PostAdminService } from '../../admin.service';
import { Category } from '../../models/Category.interface';
import { Post } from '../../models/Post.interface';

@Component({
  selector: 'app-admin-create-page',
  templateUrl: './admin-create-page.component.html',
  styleUrls: ['./admin-create-page.component.scss'],
})
export class AdminCreatePageComponent implements OnInit {
  @Input()
  detail!: Post;

  categories!: Category[];

  // @Output()
  // create: EventEmitter<Post> = new EventEmitter<Post>();
  today = new Date();
  todayMs = this.today.getTime();

  imageNew: string = '';

  constructor(private postService: PostAdminService) {}

  ngOnInit(): void {
    this.postService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  onCreatePost(event: Post) {
    event = { ...event, image: this.imageNew };
    this.postService.createPost(event).subscribe((data: Post) => {
      this.detail = { ...this.detail, ...event };
    });
    alert('Đã thêm thành công');
  }

  uploadImage(event: any) {
    console.log('uploadImage', event.target.files[0].name);
    const file = event.target.files[0];
    // const path = `posts/${file.name}`;

    if (file.type.split('/')[0] !== 'image') {
      return alert(
        'Chỉ được nhập 1 file định dạng ảnh lên - Tiếp tục sẽ gây lỗi'
      );
    } else {
      console.log('image', this.detail);
      this.imageNew = event.target.files[0].name;
      // return (this.detail = event.target.files[0].name);
    }
  }
  toggleCheckIn(special: boolean): void {
    this.detail.special = !special;
  }
  //
  handleSubmit(post: Post, isValid: boolean | null) {
    if (isValid) {
      this.onCreatePost(post);
      console.log(post);
    }
  }
}
