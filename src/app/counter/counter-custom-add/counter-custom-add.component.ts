import { authorSelector } from './../store/counter.selectors';
import { addValue } from './../store/counter.actions';
import { InitialState } from './../store/counter.state';
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

  constructor(private store: Store<{ counter: InitialState }>) {}

  ngOnInit(): void {
    this.store.select(authorSelector).subscribe((author) => {
      this.author = author;
    });
  }

  addCustomValue() {
    if (!isNaN(+this.input)) {
      this.store.dispatch(addValue({ value: +this.input }));
    }
    this.input = '0';
  }
}
