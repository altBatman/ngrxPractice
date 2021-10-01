import { authorSelector } from './../store/counter.selectors';
import { addValue, changeAuthor } from './../store/counter.actions';
import { CounterState } from './../store/counter.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-custom-add',
  templateUrl: './counter-custom-add.component.html',
  styleUrls: ['./counter-custom-add.component.scss'],
})
export class CounterCustomAddComponent implements OnInit {
  public input: string;
  author: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(authorSelector).subscribe((author) => {
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
