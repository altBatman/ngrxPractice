import { getAuthorSelector } from './../store/counter.selectors';
import { addValue, changeAuthor } from './../store/counter.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-counter-custom-add',
  templateUrl: './counter-custom-add.component.html',
  styleUrls: ['./counter-custom-add.component.scss'],
})
export class CounterCustomAddComponent implements OnInit {
  public input: string;
  author: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getAuthorSelector).subscribe((author) => {
      this.author = author;
    });
  }

  addCustomValue() {
    if (!isNaN(+this.input)) {
      this.store.dispatch(addValue({ value: +this.input }));
      this.store.dispatch(changeAuthor());
    }
    this.input = '0';
  }
}
