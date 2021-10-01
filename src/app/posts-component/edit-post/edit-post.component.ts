import { Post } from './../models/post.model';
import { getPostById } from './../state/post.selector';
import { AppState } from './../../app.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  postId: number;
  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.route.paramMap.subscribe((params) => {
      this.postId = +(<string>params.get('id'));
    });
  }

  ngOnInit(): void {
    const id = this.postId;
    this.postSubscription = this.store
      .select(getPostById, { id })
      .subscribe((data) => {
        this.post = <Post>data;
        this.postForm = this.fb.group({
          id: [this.post.id],
          title: [this.post.title],
          description: [this.post.description],
        });
      });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

  savePost() {
    console.log(this.postForm.value);
  }
}
