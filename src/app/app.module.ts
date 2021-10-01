import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterComponent } from './counter/counter/counter.component';
import { counterReducer } from './counter/store/counter.reducer';
import { CounterCustomAddComponent } from './counter/counter-custom-add/counter-custom-add.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home-component/home-component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsComponent } from './posts-component/posts.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { postReducer } from './posts-component/state/post.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterCustomAddComponent,
    HomeComponent,
    HeaderComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer, posts: postReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
