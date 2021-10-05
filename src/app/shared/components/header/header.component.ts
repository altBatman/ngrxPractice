import { loginStart } from './store/auth/auth.actions';
import { AppState } from 'src/app/appStore/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onLogin() {
    this.store.dispatch(loginStart());
  }
}
