import { PostsService } from './../posts.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Ipost } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input() posts: Ipost[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    //function automatically executes when component render
    this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts: Ipost[]) => {
      this.posts = posts;
    });
  }

  onDelete(id: string) {
    this.postsService.postDelete(id);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
