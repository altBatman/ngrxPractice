import { getPostById } from './../state/post.selector';
import { AppState } from './../../app.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  postId: number;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.route.paramMap.subscribe((params) => {
      this.postId = +(<string>params.get('id'));
    });
  }

  ngOnInit(): void {
    const id = this.postId;
    this.store.select(getPostById, { id }).subscribe((data) => {
      console.log(data);
    });
  }
}
