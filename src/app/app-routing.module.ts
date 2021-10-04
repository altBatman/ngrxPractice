import { PostsModule } from './posts-component/posts.module';
import { EditPostComponent } from './posts-component/edit-post/edit-post.component';
import { AddPostComponent } from './posts-component/add-post/add-post.component';
import { PostsComponent } from './posts-component/posts.component';
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
    loadChildren: () =>
      import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts-component/posts.module').then((m) => m.PostsModule),
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
