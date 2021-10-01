import { AddPostComponent } from './posts-component/add-post/add-post.component';
import { PostsComponent } from './posts-component/posts.component';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home-component/home-component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: 'new-post',
        component: AddPostComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
