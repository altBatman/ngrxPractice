import { Post } from './../models/post.model';
import { AppState } from './../../app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { addPost } from '../state/post.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      id: [Math.floor(Math.random() * 1000), Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addPost() {
    const post: Post = {
      id: this.postForm.value['id'],
      title: this.postForm.value['title'],
      description: this.postForm.value['description'],
    };
    this.store.dispatch(addPost({ post }));
    this.postForm.reset();
    this.router.navigate(['/', 'posts']);
  }
}
